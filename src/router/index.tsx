import {Route, Routes, BrowserRouter} from 'react-router-dom';
import HomeScreen from '../pages/HomeScreen';
import PageNotFound from '../pages/PageNotFound';

export default function RouterPage(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="*" element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
    )
}