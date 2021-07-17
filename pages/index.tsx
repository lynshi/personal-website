import Layout from "../components/layout/layout";

export default function Home() {
  var timestamp = new Date().toLocaleTimeString();
  return (
    <Layout pageTitle="Home" pageDescription="Lyndon Shi's personal website" transparentAtTop={true}>
      <div className="flex justify-center motion-safe:animate-fadeIn3">
        <div className="text-white text-left text-3xl font-mono">
          {timestamp} <span className="text-green-300">lynshi@website</span>:<span className="text-blue-600">~</span>$ whoami
          <br></br>
          Lyndon Shi
        </div>
      </div>
    </Layout>
  );
}
