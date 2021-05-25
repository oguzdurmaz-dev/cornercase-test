import { API_URL } from "@/config/index";
import StationsPage from "@/components/Stations";
import Layout from "@/components/Layout";
export default function Home({ data }) {
  return (
    <Layout>
      <StationsPage stations={data} />
    </Layout>
  );
}
/*Stations Fetch*/
export async function getServerSideProps() {
  const res = await fetch(`${API_URL}`);
  const data = await res.json();
  return {
    props: { data },
  };
}
