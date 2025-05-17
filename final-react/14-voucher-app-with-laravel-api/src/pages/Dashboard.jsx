import React from 'react'
import Container from '../layout/Container'
import ModuleBtn from '../components/template/ModuleBtn'
import { DiNetbeans } from "react-icons/di";
import { GoFile } from "react-icons/go";
import { TbReportMoney } from "react-icons/tb";

const Dashboard = () => {
  return (
    <div>
        <Container>
            <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 lg:py-10'>
                <div className='col-span-1 '>
                    <ModuleBtn name={"Products"} icon={<DiNetbeans className='text-gray-700 dark:text-gray-100 w-20 h-20' />} url={"/product"}/>
                </div>
                <div className='col-span-1 '>
                    <ModuleBtn name={"Sales"} icon={<TbReportMoney className='text-gray-700  dark:text-gray-100 w-20 h-20' />} url={"/sale"}/>
                </div>
                <div className='col-span-1'>
                    <ModuleBtn name={"Vouchers"} icon={<GoFile className='text-gray-700  dark:text-gray-100 w-20 h-20' />} url={"/voucher"}/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Dashboard