"use client"
import { Button, Card, CardHeader } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react'

type CardDashboardProps = {
    link: string;
};
const CardDashboard:React.FC<CardDashboardProps> = ({link}) => {
    const router = useRouter();
  return (
    <Card>
        <CardHeader title='Dashboard' />
        <Button variant='contained' color='primary' onClick={() => router.push(link)}></Button>
    </Card>
  )
}

export default CardDashboard;