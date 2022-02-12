import HomePage from '@/pages/index'

export default {
  title: 'Pages/01. Home',
  component: HomePage,
}

export const Home = () => (
  <div className='doc-story__preview' style={{ zoom: '70%' }}>
    <HomePage />
  </div>
)
