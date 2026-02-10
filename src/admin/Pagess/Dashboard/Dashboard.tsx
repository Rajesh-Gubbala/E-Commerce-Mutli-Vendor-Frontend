import React, { useEffect } from 'react'
import AdminDrawerList from '../../Components/AdminDrawerList'
import AdminRoutes from '../../../Routess/AdminRoutes'
import { useAppDispatch } from '../../../State/Store'
import { fetchHomeCategories } from '../../../State/Admin/AdminSlice'
import { createHomeCategories } from '../../../State/Customer/CustomerSlice'
import { data } from 'react-router-dom'
// import { fetchHomeCategories } from '../../../State/Admin/DealSlice'


const AdminDashboard = () => {

    const toggleDrawer=()=>{}
    const dispatch=useAppDispatch();
    useEffect(() => {
      dispatch(fetchHomeCategories()).then((response) => {
        console.log("API Response:", response); // Check if images exist
      });
    }, []);
  return (
    <div>
          <div className="lg:flex lg:h-[90vh]">
        <section className="hidden lg:block h-full">
           < AdminDrawerList toggleDrawer={toggleDrawer}/>
            </section>

        <section className="p-10 w-full lg:w-[80%] overflow-y-auto">
          <AdminRoutes/>
        </section>
      </div>
    </div>
  )
}

export default AdminDashboard