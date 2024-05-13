
import NotFoundPage from "../pages/NotFoudPage/NotFoundPage";
import SigninPage from "../pages/LoginPage/SigninPage";
import HomePage from "../pages/HomePage/HomePage";
import AdminPage from "../pages/AdminPage/AdminPage";
import HRPage from "../pages/HRPage/HRPage";
import MentorPage from "../pages/MentorPage/MentorPage";
import InternCoordinators from "../pages/InternCoordinators/InternCoordinators";
import SignupPage from "../pages/SignupPage/SignupPage";

export const routes =[
    {
         path:'/',
         page:HomePage,
         isShowHeader: true,
        
         


     },
     {
        path:'/admin',
        page:AdminPage,
        isShowHeader: true,
        
        


    },
    {
        path:'/HRsystem',
        page:HRPage,
        isShowHeader: true,
    
    },
    {
        path:'/Mentor',
        page:MentorPage,
        isShowHeader: true,
    
    },
    {
        path:'/Mentor',
        page:MentorPage,
        isShowHeader: true,
    
    },
    {
        path:'/InternCoordinators',
        page:InternCoordinators,
        isShowHeader: true,
    
    },
     
     
     
    
    {
        path:'/not',
        page:NotFoundPage,
        isShowHeader:false


    },
    {
        path:'/sign-in',
        page:SigninPage,
        isShowHeader:true


    },
    {
        path:'/sign-up',
        page:SignupPage,
        isShowHeader:true


    },
 
 
   











]