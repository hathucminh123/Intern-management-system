
import NotFoundPage from "../pages/NotFoudPage/NotFoundPage";
import SigninPage from "../pages/LoginPage/SigninPage";
import HomePage from "../pages/HomePage/HomePage";
import AdminPage from "../pages/AdminPage/AdminPage";
import HRPage from "../pages/HRPage/HRPage";
import MentorPage from "../pages/MentorPage/MentorPage";
import InternCoordinators from "../pages/InternCoordinators/InternCoordinators";
import SignupPage from "../pages/SignupPage/SignupPage";
import TaskComponent from "../components/MentorComponent/TaskComponent/TaskComponent";

export const routes =[
    {
         path:'/',
         page:HomePage,
         isShowHeader: false,
        
         


     },
     {
        path:'/admin',
        page:AdminPage,
        isShowHeader: false,
        
        


    },
    {
        path:'/HRsystem',
        page:HRPage,
        isShowHeader: false,
    
    },
    {
        path:'/mentor',
        page:MentorPage,
        isShowHeader: false,
    
    },
    {
        path:'/tasks',
        page:TaskComponent,
        isShowHeader: false,
    
    },
    
    {
        path:'/InternCoordinators',
        page:InternCoordinators,
        isShowHeader: false,
    
    },
     
     
     
    
    {
        path:'/not',
        page:NotFoundPage,
        isShowHeader:false


    },
    {
        path:'/sign-in',
        page:SigninPage,
        isShowHeader:false


    },
    {
        path:'/sign-up',
        page:SignupPage,
        isShowHeader:false


    },
 
 
   











]