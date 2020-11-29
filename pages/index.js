import DownloadButton from "../components/DownloadButton";

export default function Home() {
  return (
    <section class="space-y-16">
      <div>
        <h2 class="font-bold text-lg uppercase text-gray-800 mb-2">Versão para fundo escuro</h2>
        <div className="bg-gray-900 p-10 shadow flex justify-center rounded-lg">
          <img className="h-24" src="/assets/logo.svg" alt="Traction" />
        </div>
        <div class="mt-2 text-center">
          <DownloadButton file="/assets/logo.svg"/>
        </div>
      </div>

      <div>
        <h2 class="font-bold text-lg uppercase text-gray-800 mb-2">Versão para fundo claro</h2>
        <div className="bg-gray-100 p-10 shadow flex justify-center rounded-lg">
          <img className="h-24" src="/assets/logo2.svg" alt="Traction" />
        </div>
        <div class="mt-2 text-center">
          <a href="" class="p-2 bg-red-500 rounded text-white uppercase text-xs">
          <DownloadButton file="/assets/logo2.svg"/>
          </a>
        </div>
      </div>

      <div>
        <h2 class="font-bold text-lg uppercase text-gray-800 mb-2">Ícone</h2>
        <div className="bg-gray-100 p-10 shadow flex justify-center rounded-lg">
          <img className="h-24" src="/assets/icon.svg" alt="Traction" />
        </div>
        <div class="mt-2 text-center">
          <a href="" class="p-2 bg-red-500 rounded text-white uppercase text-xs">
          <DownloadButton file="/assets/icon.svg"/>
          </a>
        </div>
      </div>
    </section>
  )
}
