"use client"
import React, { useState } from 'react';
import styles from './admin.module.css';
import { Administrators, defaultAdministrator } from '@/app/data';
import AdministratorsList from '@/app/components/dashboard/administrators/adminList';

const AdministratorsPage = () => {
  const [AdminList, setAdminList] = useState(defaultAdministrator as Administrators[]);
  console.log(AdminList);
  return (
    <div>
      <AdministratorsList list={AdminList}/>
    </div>
  )
}

export default AdministratorsPage;
