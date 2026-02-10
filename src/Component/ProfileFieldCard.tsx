import { Divider } from '@mui/material'
import React from 'react'

const ProfileFieldCard = ({ keys, value }: { keys: string; value: string }) => {
  return (
    <div className="p-5 flex items-center bg-slate-50">
      <div className="w-20 lg:w-36 pr-5 font-semibold">{keys}</div>
      <Divider orientation="vertical" flexItem />
      <div className="pl-4 lg:pl-10 font-semibold lg:text-lg">{value}</div>
    </div>
  );
};

export default ProfileFieldCard;
