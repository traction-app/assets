export default function DownloadButton (props) {
  return (
    <a href={props.file} class="cursor-pointer p-2 bg-red-500 rounded text-white uppercase text-xs" download>
      Download SVG
    </a>
  )
}
