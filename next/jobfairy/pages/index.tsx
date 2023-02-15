import { AppBar, AppBarSection, StackLayout } from '@progress/kendo-react-layout';
import '@progress/kendo-theme-default/dist/all.css';
import Head from 'next/head';
import { MainMenu } from '../components/MainMenu';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>jobfairy</title>
      </Head>

      <StackLayout orientation='vertical' style={{ minHeight: "100vh" }}>
        <StackLayout align={{ vertical: "top" }}>
          <MainMenu />
        </StackLayout>

        <StackLayout orientation='horizontal' align={{ vertical: "stretch" }}>
          <main></main>
        </StackLayout>

        <StackLayout align={{ vertical: "bottom" }}>
          <AppBar>
            <AppBarSection>
              v3.0
            </AppBarSection>
          </AppBar>
        </StackLayout>
      </StackLayout>
    </>
  )
}
