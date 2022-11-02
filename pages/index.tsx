type HomeProps = {
  count: number
}

export default function Home({count}: HomeProps) {
  fetch('http://localhost:3333/pools/count')

  return (
    <h1>Hello {count}</h1>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count');
  const data = await response.json();

  console.log(data);
  

  return {
    props: {
      count: data
    }
  }
}