import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Homepage from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';
import Service from './pages/service';
import Training from './pages/training';
import Fhra from './pages/FHRA';
import Register from './pages/register';
import Master from './layout/master';
import AdminMaster from './admin/adminMaster';
import Alluser from './admin/alluser';
import PageNotFound from './pages/pagenotfound';
import AdminEnquiry from './admin/adminEnquiry';
import Dashboard from './admin/dashboard';
import Forgotpwd from './pages/forgotpwd';
import Certificate from './admin/certificates';
import Addcategory from './admin/category/addCategory';
import Category from './admin/category/category';
import Updatecategory from './admin/category/updateCategory';
import Addcertificate from './admin/certificate/addcertificate';
import Allcertificate from './admin/certificate/allcertificate';
import Updatecertificate from './admin/certificate/updatecertificate';
import FsatoTraining from './pages/fsatoTraining';
import UpdateEnequiry from './admin/enquiry/updateEnquiry';
import AddImage from './admin/upload/addimage';
import AllImages from './admin/upload/allimage';
import Advtraining from './pages/training/advtraining';
import Basictraining from './pages/training/basictraining';
import Specialtraining from './pages/training/specialtraining';
import Updateimage from './admin/upload/updateimage';
import Event from './pages/Event';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Master/>}>
              <Route path="/" element={<Homepage/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/event' element={<Event/>} />
              <Route path='/contact' element={<Contact/>}/> 
              <Route path='/signin' element={<Login/>}/>
              <Route path='/service' element={<Service/>}/>
              <Route path='/training' element={<Training/>}/>
              <Route path='/training/advance' element={<Advtraining/>}/>
              <Route path='/training/basic' element={<Basictraining/>}/>
              <Route path='/training/special' element={<Specialtraining/>} />
              <Route path='/fsatotraining' element={<FsatoTraining/>}/>
              <Route path='/fhra' element={<Fhra/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/forgotpassword' element={<Forgotpwd/>}/>
            </Route>
            <Route path='/admin' element={<AdminMaster/>}>
                <Route path='/admin' element={<Dashboard/>}/>
                <Route path='/admin/alluser' element={<Alluser  title="All User" />}/>
                <Route path='/admin/adminenquiry' element={<AdminEnquiry title="Enquiry"/>}/>
                <Route path='/admin/image/add' element={<AddImage/>}  />
                <Route path='/admin/image/all' element={<AllImages/>}/>
                <Route path='/admin/image/update/:id' element={<Updateimage/>}/>
                <Route path='/admin/adminenquiry/update/:id' element={<UpdateEnequiry/>}/>
                <Route path='/admin/certificate' element={<Certificate title="Training"/>}/>
                <Route path='/admin/certificate/all' element={<Allcertificate/>}/>
                <Route path='/admin/certificate/update/:id' element={<Updatecertificate/>}/>
                <Route path='/admin/trainee/add' element={<Addcertificate/>}/>
                <Route path='/admin/category/update/:id' element={<Updatecategory/>}/>
                <Route path='/admin/category/add' element={<Addcategory title="Add Sector"/>}/>
                <Route path='/admin/category' element={<Category title="Sector"/>}/>

            </Route>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;
