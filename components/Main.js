import {
  Box,
  Button,
  Checkbox,
  MenuItem,
  Slider,
  TextField,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import bus from "../public/bus-icon.png";

import coin from "../public/Tripcoin.png";

import v from "../public/Vector.png";
import v5 from "../public/Vector5.png";

const Main = () => {
  const counters = [
    {
      value: "K",
      label: "Kolabagan Counter",
    },
    {
      value: "D",
      label: "Dampara Counter",
    },
  ];
  return (
    <main className="flex mt-3.5">
      {/* left side */}
      <section className="w-72 h-auto shadow">
        <div className="flex justify-between mx-4">
          <p className="mt-5 text-sm text-slate-900">Sort & Filter</p>
          <p className="mt-5 text-base text-sky-500">RESET</p>
        </div>

        <div className="mt-5">
          <h5 className="ml-4">Price Range</h5>
          <hr className="w-64" />
          <div className="flex justify-between mx-4">
            <p className="mt-5 text-sm">
              Minimum price <br /> <span className="font-bold">500</span>
            </p>
            <p className="mt-5 text-sm">
              Maximum Price <br /> <span className="font-bold">3,213</span>
            </p>
          </div>
          <Box className="w-52 mx-auto">
            <Slider value={[1, 100]} />
          </Box>
        </div>

        <div className="mt-5">
          <h5 className="ml-4">Class</h5>
          <hr className="w-64" />
          <div className="ml-4">
            <Checkbox /> <p className="inline-block">AC(40)</p>
            <br />
            <Checkbox /> <p className="inline-block">Non AC(24)</p>
          </div>
        </div>

        <div className="mt-5">
          <h5 className="ml-4">Schedule</h5>
          <hr className="w-64" />
          <p className="text-sm mt-8 ml-4">Departure Time</p>
          <div className="ml-4">
            <Checkbox />
            {/* <input type="checkbox" className="text-gray-400 opacity-50" /> */}
            <p className="inline-block">00:00 - 05:59</p>
            <br />
            <Checkbox /> <p className="inline-block">06:00 - 11:59</p>
            <br />
            <Checkbox /> <p className="inline-block">12:00 - 17:59</p>
            <br />
            <Checkbox /> <p className="inline-block">18:00 - 23:59</p>
          </div>
        </div>
      </section>

      {/* Right-part */}

      <section className="ml-7">
        <h5 className="mt-1">48 Available Buses</h5>
        <div className="flex">
          <div className="w-60 h-10 flex shadow">
            <div className="inline-block ml-4">
              <img
                src="/Vector (Stroke) 1.png"
                alt="Image1"
                width={32}
                height={32}
              />
            </div>
            <p className="ml-3 mt-2">Earliest Buses</p>
          </div>

          <div className="w-60 h-10 flex shadow bg-blue-600">
            <span className="ml-4">
              <img src="/Group.png" alt="Image2" width={32} height={32} />
            </span>
            <p className="ml-3 mt-2 text-white">Cheapest Buses</p>
          </div>

          <div className="w-60 h-10 flex shadow">
            <span className="ml-4">
              <img
                src="/Vector (Stroke) 3.png"
                alt="Image3"
                width={32}
                height={32}
              />
            </span>
            <p className="ml-3 mt-2">Available Seats</p>
          </div>

          <div className="w-60 h-10 flex shadow">
            <span className="ml-4">
              <img
                src="/Vector (Stroke) 3.png"
                alt="Image4"
                width={32}
                height={32}
              />
            </span>
            <p className="ml-3 mt-2">Fastest Trips</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex-auto">
            <div className="flex justify-between">
              <div>
                <h5 className="mb-8 text-base mt-4">AC</h5>
              </div>

              <div className="text-center">
                <h5 className="bg-sky-200 rounded-full font-medium mt-4 mb-0 px-4 text-lg">
                  Hanif Enterprise
                </h5>
                <p className="mb-6 text-xs">31-DHK-CTG(D)</p>
              </div>

              <div className="flex mt-4">
                <span className="mt-0.5">
                  <Image
                    src={coin}
                    alt="coin"
                    width={24}
                    height={24}
                    className="mt-2"
                  />
                </span>
                <span className="text-lg ml-2.5 mr-4">55</span>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <p className="text-xs">From</p>
                <p className="text-base font-semibold">DHAKA</p>
                <p className="text-base font-semibold">11:30PM</p>
                <p className="text-xs font-medium">Kolabagan Counter</p>
                <p className="text-xs">22 June 2021</p>
              </div>
              <div className="col-span-2 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="mt-6">
                    <span className="mr-4">----------</span>

                    <Image src={bus} alt="Bus" width={40} height={20} />

                    <span className="ml-4">----------{">"}</span>
                  </div>
                  <p className="mt-1.5 text-orange-500 text-sm">
                    16 Seats available
                  </p>
                  <p className="text-xs">6h 00m</p>
                </div>
                <div>
                  <p className="text-xs">To</p>
                  <p className="text-base">CHOTTOGRAM</p>
                  <p className="text-base font-semibold">05:30 PM</p>
                  <p className="text-sm">Dampara Counter</p>
                  <p className="text-xs">23 June 2021</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-72 bg-sky-100 text-end">
            <div className="mr-3.5">
              <p className="text-xs">Per Person</p>
              <p className="text-base text-blue-700 font-semibold">BDT 750</p>
              <p className="text-sm text-blue-600 font-medium">BDT 775</p>
              <Button variant="contained">View Seats</Button>
              <p className="text-xs text-blue-700">Cancellation Policy</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-auto">
            <div className="flex mt-11">
              <TextField
                select
                label="Boarding Point"
                value={counters[0].value}
                className="w-80 mr-4"
              >
                {counters.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                reuired
                select
                label="Dropping Point"
                value={counters[1].value}
                className="w-80"
              >
                {counters.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="flex">
              <div className="flex mt-6 mr-8">
                <Image src={v} alt="v" width={20} height={20} />
                <span className="ml-2.5 text-sm">3 Sold Out</span>
              </div>
              <div className="flex mt-6 mr-8">
                <img src="/Vector (1).png" alt="v" width={20} height={20} />
                <span className="ml-2.5 text-sm">2 Booked</span>
              </div>
              <div className="flex mt-6 mr-8">
                <Image src="/Vector (2).png" alt="v" width={20} height={20} />
                <span className="ml-2.5 text-sm">2 Selected</span>
              </div>
              <div className="flex mt-6 mr-8">
                <Image src="/Vector (3).png" alt="v" width={20} height={20} />
                <span className="ml-2.5 text-sm">14 Available</span>
              </div>
              <div className="flex mt-6 mr-8">
                <Image src="/Vector (4).png" alt="v" width={20} height={20} />
                <span className="ml-2.5 text-sm">20 Blocked</span>
              </div>
            </div>
          </div>
          <div className="w-72 text-center">
            <div className="mt-11">
              <Button variant="contained" className="w-36">
                SEAT INFO
              </Button>
              <Button variant="outlined" className="w-36">
                POLICY
              </Button>
            </div>
            <div className="flex justify-between">
              <div className="flex mt-6">
                <span>
                  <img src="/Vector5.png" alt="v" width={20} height={20} />
                </span>
                <span className="ml-2.5 text-sm">
                  C4 <span className="ml-3.5">B-Class</span>
                </span>
              </div>
              <p className="font-medium">BDT 750</p>
            </div>
            <div className="flex justify-between">
              <div className="flex mt-6">
                <span>
                  <Image src={v5} alt="v" width={20} height={20} />
                </span>
                <span className="ml-2.5 text-sm">
                  B4 <span className="ml-3.5">B-Class</span>
                </span>
              </div>
              <p className="font-medium">BDT 750</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <div className="flex mt-6">
                <span className="ml-2.5 text-sm">Charge</span>
              </div>
              <p className="font-medium">BDT 20</p>
            </div>
            <div className="flex justify-between">
              <div className="flex mt-6">
                <span className="ml-2.5 text-sm">Insurance</span>
              </div>
              <p className="font-medium">BDT 50</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <div className="flex mt-6">
                <span className="ml-2.5 text-sm">Sub Total:</span>
              </div>
              <p className="font-bold">BDT 1570</p>
            </div>

            <div className="flex">
              <Checkbox defaultChecked />
              <p className="text-sm">
                I want to avail
                <span className="text-blue-700 font-medium ml-1">
                  Insurance Service
                </span>
              </p>
            </div>
            <Button variant="contained" disableElevation>
              Select & Continue To Return
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
