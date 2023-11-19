import './App.css';
import Home from '../src/Pages/home/Home'
import SearchResult from '../src/Pages/searchResult/SearchResult'
import Explore from '../src/Pages/explore/Explore'
import Detail from '../src/Pages/detail/Detail'
import PageNotFound from '../src/Pages/404/PageNotFound'
import {Routes,Route} from 'react-router-dom'
import {GET} from '../src/Utils/api'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getApiConfiguration,getGenres} from '../src/Store/homeSlice'


function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    fetchingbasedata()
    fetchinggenres()
  },[])

  const fetchingbasedata = async () => {
    const resp = await GET('/configuration');
    // the data i am getting from confguration end point for images base url and original is the size and the third end point is actually the path.
    const respdata = {
      backdrop : resp?.data?.images?.secure_base_url + "original",
      profile : resp?.data?.images?.secure_base_url + "original",
      poster : resp?.data?.images?.secure_base_url + "original",
    }
    dispatch(getApiConfiguration(respdata))
  }

  const fetchinggenres = async ()  => {
    const endpoints = ['movie','tv'];
    const promises = [];
    const genreslist = {};
    endpoints.forEach((url) => {
      promises.push(GET(`/genre/${url}/list`))
    })
    const resp = await Promise?.all(promises)

    resp.map((genre) => {
      const {genres} = genre?.data;
      return (
        genres.map((item) => {
          genreslist[item?.id] = item;
        })
      )
    })
    genreslist && dispatch(getGenres(genreslist))
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Detail />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      
    </div>
  );
}

export default App;
