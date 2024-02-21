import { Route, Switch } from 'wouter'
import { ModalProvider } from './modal-context'
import { AuthProvider } from './auth-context'
import LoginPage from './routes/sing-in'
import RegisterPage from './routes/sing-up'
import DashboardPage from './routes/dashboard'
import TermPage from './routes/term'
import FrequentQuestionPage from './routes/frequent-questions'
import MenuPage from './routes/menu'
import HowToTakePartPage from './routes/how-to-take-part'
import AwardsPage from './routes/awards'
import WinPage from './routes/win'
import ProductsPage from './routes/products'
import { AdminPage, HomeAdminPage } from './routes/admin'
import NotFoundPage from './routes/not-found'
import ReactGA from 'react-ga4'
import TagManager from 'react-gtm-module'
import ReactPixel from 'react-facebook-pixel'

const TRACKING_ID = 'G-ZBV4H3NHES'
const PIXEL_ID = '1069697930915333'
const tagManagerArgs = {
  gtmId: 'GTM-NZ8LPH2H',
}

ReactPixel.init(
  PIXEL_ID,
  undefined,
  {
    autoConfig: true,
    debug: true,
  },
)

ReactPixel.pageView()
ReactGA.initialize(TRACKING_ID)
TagManager.initialize(tagManagerArgs)

export default function App() {
  return (
    <main class='wrapper'>
      <ModalProvider>
        <Switch>
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/term' component={TermPage} />

          <Route path='/admin' component={AdminPage} />
          <Route path='/admin/home' component={HomeAdminPage} />

          <AuthProvider>
            <Route path='/' component={DashboardPage} />
            <Route
              path='/frequent-questions'
              component={FrequentQuestionPage}
            />
            <Route path='/how-to-take-part' component={HowToTakePartPage} />
            <Route path='/menu' component={MenuPage} />
            <Route path='/awards' component={AwardsPage} />
            <Route path='/win' component={WinPage} />
            <Route path='/products' component={ProductsPage} />
          </AuthProvider>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </ModalProvider>
    </main>
  )
}
