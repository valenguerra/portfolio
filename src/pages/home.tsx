export const Home = (): JSX.Element => {
  return (
    <>
      <header className='bg-slate-900 px-8 fixed w-full'>
        <div className='h-16 max-w-screen-2xl mx-auto flex justify-between items-center text-white'>
          <h1 className='font-bold text-xl'>React • Webpack • Typescript • TailwindCSS</h1>
          <span className='font-light text-xl'>Valentino Guerra</span>
        </div>
      </header>
      <main className='w-full h-screen bg-red-50 pt-16 flex items-center justify-center'>
        <h2 className='font-bold text-gray-300 text-xl'>Placeholder</h2>
      </main>
    </>
  );
};