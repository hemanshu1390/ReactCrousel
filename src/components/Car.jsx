
import React from 'react';
import { Card, CardHeader, CardBody, Typography, Avatar } from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";



export default function Car({ name, role, avatarSrc, review, city, mobileNo }) {
  return (
    <div>
      <Card color="transparent" shadow={true} className="w-[40vmax]   bg-deep-purple-400 border-8  px-3">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="flex-xl items-center gap-4 pt-0 pb-8"
        >
          <Avatar
            size="xxl"
            variant="circular"
            src={avatarSrc}
            alt={name}
          />
          {/* <div className="flex-xl w-full flex-flex-xl-column  gap-0.5"> */}
            <div className="flex-xl items-center justify-between">
              <Typography variant="h5" color="blue-gray">
                {name}
              </Typography>
            <Typography color="white">{role}</Typography>

              <div className="flex flex-col items-center gap-4">
                <Rating unratedColor="amber" ratedColor="amber" />
              </div>
            </div>
          {/* </div> */}
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <Typography className='text-brown-50'>
            &quot;{review}&quot;
          </Typography>
          <div className="float-start">
            <Typography className="text-black text-lg  text-start">City: <span>{city}</span></Typography>
            <Typography className="text-black text-lg">Mobile no.: <span>{mobileNo}</span></Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
