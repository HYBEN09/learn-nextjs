import Layout from "@/components/Layout/Layout";
import "../styles/globals.css";

// Component는 렌더링 될 실제 페이지 콘텐츠를 저장하고 있는 프로퍼티입니다.
// pageProps는 페이지가 받는 특수 프로퍼티
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
