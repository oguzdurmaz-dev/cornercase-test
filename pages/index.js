import styles from "@/styles/Home.module.css";
import { API_URL } from "@/config/index";
import StationsPage from "./stations/index";
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
  const res = await fetch(`${API_URL}/api/stations`);
  const data = await res.json();
  return {
    props: { data },
  };
}
