//homepage directory
import HomePage from './components/HomePage.vue'
import StudentLogin from './components/StudentLogin.vue'
import HomeView from './components/HomeView.vue'
import AdminRegister from './components/AdminRegister.vue'
import AdminLogin from './components/AdminLogin.vue'

//student directory
import StudentInfo from './components/student/StudentInfo.vue'
import StudentCommon from './components/student/StudentCommon.vue'


//admin directory
import AdminDashboard from './components/admin/AdminDashboard.vue'
import AdminView from './components/admin/AdminView.vue'
import AdminUpload from './components/admin/AdminUpload.vue'
import AllotmentSetting from './components/admin/AllotmentSetting.vue'
import AllotmentStart from './components/admin/AllotmentStart.vue'
import GenerateReport from './components/admin/GenerateReport.vue'




export default [ {path:'/',component:HomeView,children:[
        {path:'', component: HomePage},
        {path:'Student_login',component:StudentLogin},
        {path:'Admin_Login',component:AdminLogin},
        {path:'Admin_registration',component:AdminRegister},
    ]},
    {path:'/student/:uid',component:StudentCommon, children: [
        {path: '', component:StudentInfo,meta:{auth:true }}
    ]},
    {path:'/admin/:id',component:AdminView, children: [
        {path: '', component:AdminDashboard,meta:{adminauth:true }},
        {path: 'upload_data', component:AdminUpload ,meta:{adminauth:true }},
        {path: 'allotment_setting', component:AllotmentSetting,meta:{adminauth:true }},
        {path: 'allotment_start', component:AllotmentStart,meta:{adminauth:true }},
        {path: 'generate_report', component:GenerateReport,meta:{adminauth:true }},

    ]}]




