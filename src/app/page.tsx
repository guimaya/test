import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <iframe
        title='Embedded Report'
        width='1280'
        height='720'
        src='https://lookerstudio.google.com/embed/reporting/5926df24-e27e-43e3-ba25-e69f6de326e0/page/6zXD'
        frameBorder='0'
        style={{ border: 0 }}
        allowFullScreen
        sandbox='allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox'
      ></iframe>
    </main>
  )
}
