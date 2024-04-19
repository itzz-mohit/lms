import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';


export default function Assignment() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent({format : "text"}));
    }
  };
  return (
    <>
      <Editor
        apiKey='zpchvvwstp4brqyobhn3y9pz99tkpn13y8rhix0ndp4f6kgz'
        onInit={(_evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 300,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <div>
      <button onClick={log} className='bg-sky-600 hover:bg-sky-700 p-4 rounded-md'>Submit</button>
      </div>
    </>
  );
}