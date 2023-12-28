import {For, Show, createEffect, createSignal} from "solid-js";
import axios from "axios";
import {onMount} from "solid-js";
import {z} from "zod";
import {toast} from "solid-toast";

const urlSchema = z.object({
 url: z
  .string({
   required_error: "URL is required",
  })
  .url({
   message: "Invalid URL, Please enter a valid url",
  }),
});

type ServerResponse = {
 id: string;
 destination: string;
 shortUrl: string;
 copyStatus?: string | null;
};

const SHORTLY_URL_API = "https://urlshortener-restapi.vercel.app/api/shorturl";

export function FormSection() {
 const [formData, setFormData] = createSignal({});
 const [savedUrlData, setSavedUrlData] = createSignal<ServerResponse[]>([]);
 const [error, setError] = createSignal<string | null>();

 const [serverResponses, setServerResponses] = createSignal<ServerResponse[]>(
  []
 );

 onMount(() => {
  const storedResponses = localStorage.getItem("serverResponses");
  if (storedResponses) {
   setServerResponses(JSON.parse(storedResponses));
  }
 });

 const handleSubmit = async (e: Event) => {
  e.preventDefault();

  const formElement = e.target as HTMLFormElement;
  const data = new FormData(e.target as HTMLFormElement);
  const entries = Array.from(data.entries());
  const formData = Object.fromEntries(entries);
  const urlData = formData["url-destination"];

  console.log(urlData);

  const result = urlSchema.safeParse({url: urlData});

  if (!result.success) {
   setError(result.error.errors[0]?.message);
   return;
  }

  if (result.success) {
   setError(null);
  }

  console.log(result);

  const payload = {
   destination: urlData,
  };

  setFormData(payload);

  console.log(payload, "payload");

  try {
   toast.promise(
    axios.post(SHORTLY_URL_API, payload, {
     headers: {
      "Content-Type": "application/json",
     },
    }),
    {
     loading: "Shortening URL...",
     success: (res) => {
      const apiResponse = res.data;
      setSavedUrlData((prev) => [apiResponse, ...prev]);
      formElement.reset();
      return <span>URL shortened successfully!</span>;
     },
     error: <span>An error happended</span>,
    }
   );
  } catch (e: unknown) {
   if (e instanceof axios.AxiosError) {
    setError(e.message);
    console.log(e);
   }
  }
 };

 createEffect(() => {
  console.log(formData());

  let existingData = JSON.parse(
   localStorage.getItem("serverResponses") || "[]"
  );
  if (!Array.isArray(existingData)) {
   existingData = [];
  }
  const newResponse = savedUrlData()[0];
  if (newResponse) {
   const newData = [...existingData, newResponse];
   localStorage.setItem("serverResponses", JSON.stringify(newData));
   setServerResponses(newData);
  }
 });

 createEffect(() => serverResponses());

 return (
  <section class="w-full -translate-y-16 space-y-6">
   <div id="form-wrapper" class="bg-dark-violet p-6 rounded-xl   w-full ">
    <form
     class="space-y-6 sm:flex sm:flex-row sm:items-center gap-4"
     onSubmit={handleSubmit}
    >
     <input
      type="text"
      name="url-destination"
      placeholder="Enter a link here..."
      required
      class="w-full sm:w-4/5 py-2 px-2 rounded-lg sm:flex-grow-4"
     />
     <div class="w-full sm:flex-1 ">
      <button class="w-full rounded-lg text-lg mb-5">Shorten it!</button>
     </div>
    </form>
    <Show when={error()}>
     <p class="text-red-500">{error()}</p>
    </Show>
   </div>

   <For each={serverResponses()}>
    {(savedData, i) => {
     const index = i();

     return (
      <div class="bg-white p-6 text-very-dark-violet flex flex-col sm:flex-row flex-wrap items-start md:items-center justify-between space-y-2 rounded-lg">
       <div>
        <p>{savedData.destination}</p>
       </div>
       <div class="flex flex-col sm:flex-row space-y-2 space-x-4 items-center">
        <a
         class="text-cyan"
         href={`${savedData.destination}`}
         target="_blank"
         rel="noopener noreferrer"
        >
         {`${SHORTLY_URL_API}/${savedData.shortUrl}`}
        </a>
        <button
         class={`hover:bg-dark-violet cursor-pointer rounded-md px-6 text-white py-2 ${
          savedData.copyStatus === "Copied" ? "bg-dark-violet" : "bg-cyan"
         } `}
         onClick={() => {
          navigator.clipboard.writeText(
           `${SHORTLY_URL_API}/${savedData.shortUrl}`
          );
          const newResponses = [...serverResponses()];
          newResponses[index] = {...newResponses[index], copyStatus: "Copied"};
          setServerResponses(newResponses);
          setTimeout(() => {
           const newResponses = [...serverResponses()];
           newResponses[index] = {...newResponses[index], copyStatus: null};
           setServerResponses(newResponses);
          }, 10000);
         }}
        >
         {savedData.copyStatus || "Copy"}
        </button>
       </div>
      </div>
     );
    }}
   </For>
  </section>
 );
}
