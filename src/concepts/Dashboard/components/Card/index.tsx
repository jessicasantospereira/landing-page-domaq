"use client";
import { Button, Card, CardContent, CardHeader } from "@mui/material";
import Link from "next/link";
import React from "react";

type CardDashboardProps = {
  link: string;
  title: string;
  content: string;
};
const CardDashboard: React.FC<CardDashboardProps> = ({
  link,
  title,
  content,
}) => {
  return (
    <Card>
      <div className="p-4">
        <CardHeader title={title} />
        <CardContent>{content}</CardContent>
        <Button className="m-6" variant="contained" color="primary">
          <Link href={{ pathname: `/dashboard${link}` }}>Entrar</Link>
        </Button>
      </div>
    </Card>
  );
};

export default CardDashboard;
