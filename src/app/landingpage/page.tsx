import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
import head from "next/head";
import Image from "next/image";

export default function LandingPage() {
  return (
    <>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.12.13/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <div className="container mx-auto p-4">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <img
              className="h-8 w-10 rounded-full"
              src="https://t4.ftcdn.net/jpg/04/51/06/95/360_F_451069523_KiIeRNYBxANx23WgBk3xY0jRGTAN2Tb3.jpg?color=indigo&shade=500"
            />
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li className="">
                <a>Home</a>
              </li>
              <li className="">
                <a>Jobs</a>
              </li>{" "}
              <li className="">
                <a>Company</a>
              </li>{" "}
              <li className="">
                <a>Blog</a>
              </li>
              <li className="px-5">
                <button className="btn btn-outline btn-primary px-3">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-col lg:flex-row mt-[4rem]">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 p-4 text-left">
            <h1 className="font-bold text-6xl text-black lg:text-6xl xl:text-6xl">
              Let's Get Your
            </h1>
            <div className="flex">
              <span className="text-6xl font-bold text-blue-500 lg:text-6xl xl:text-6xl">
                Dream Job{" "}
              </span>
              <h1 className="text-black text-6xl font-bold ml-5 lg:text-6xl xl:text-6xl">
                With
              </h1>
            </div>
            <h1 className="text-black text-6xl font-bold lg:text-6xl xl:text-6xl">
              Tayqudo
            </h1>
            <p className="mt-5 text-gray-500">
              Tayqudo is the best and most trusted platform that <br /> can make
              your dream job come true.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 p-4 mt-4 lg:mt-0">
            <img
              src="https://www.shutterstock.com/image-photo/business-team-two-busy-professionals-260nw-2479065531.jpg"
              alt="Description of the image"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="flex sm:flex-wrap md: flex-wrap md:pl-[5rem] lg:flex-wrap xl:flex-nowrap">
          <img
            className="w-1/3 sm:w-1/3 lg:w-1/3"
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            className="w-1/3 sm:w-1/3 lg:w-1/3"
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            className="w-1/3 sm:w-1/3 lg:w-1/3"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA8FBMVEX///8AAAAutn3gHlo2xfDssi7g4OCtra339/eHh4fl5eWysrLfAE/fAFEes3e/5tPwoLSk28L6/v/0u8kqxPDssR/ttTenp6fz8/Pt7e1ubm7Nzc27u7sTExM1NTVnZ2f12aSo4vfu+v4hISFHR0d3d3eF0K7W1taampr9+O3qdpRVVVVdw5bh8+vX7+QtLS367dP52OHeAEfrrADvwF0iIiLCwsJk0POR3Pbv+fWS1Lbb8/xMv43B6/p31fTk9v0xMTG56Pn97vLnY4blUHr30NvxyHX55sPhK2PuvE6QkJDtkqnyr8Hz0Y7+/PRdXV0v/94nAAAFxUlEQVR4nO2Ya1vaSBiGJ6KYgGAXoRxCiFUiUKlnsZa226K2Vlv9//+mOcxM5gTdxL32Uva5P42ZMM6ddw7vDCEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA/5jam4uL9ztJ+fLDePyhlqMRO+GpffmXmpHZWa1HTKPyu2rEymXmRtathOLT+mLTZpynNaNwUV+NiSK3ElP9mLmR52w4pYL1T4RsVqniu6ytPGfDT8zwDSF/McPNrK08Z8Pp0hvWVpfdMBym9SU3JNOLeLtYYsNwpO6E1JbZkAHD+Tw/w9r7VYnPf0dPZcOD8cpHY47abvqHnrfbD5ol9shkOAl6ntcLumGxuF6OWJcSTtfp74atOJMFhmVKs51VcLUuG9ajlEY23AwT1BVDjtruWCm97jzDMn/H65ImLZbSZppe2spwnmHA3vAzCvJcVHRUVprLpFwdKz+dWDKHA5Nhqy++EzBdblg8lBrZdY2G7MNY/ayCO7pgnJeKhrwsB1EVDLtvMGydy+/0FMOu1krTYOiyyvPMx6mpyVDZD/dY+UD8pa11LZFSDL/or4mG+meyrHXNsMTrsk7COTH8KpwtDgRD6Zxxx4LS8WlcekQ35NPHbFgy1g0UQ3tXrMmKaR6Gp/watVohqaF8VqT/NZk2bsC+vWxYnCdIDXvmSsWQz+RuDsEwiNpa+jV6HgexGg/MxLAqh7Cd/M8O+9seWrZu6LO+HZbbdssV1t7YkI/RXjesnlCTnhJDPg6GJBc7n5O7C8bFNHl+MK5Wx7HUXnyfsSevMzQ6wsynJdGQz9WAvjPgG0NsyIJzR6ujFdNLApUa8mWUf83s1ETm1KvPaAwtb1iSK0TDsta3lmhY4haMIV1JU8M7vozu5xfMR7pN9xxXeC4asvElVIs7Pn3VE6pbrMAM+Tjffcq1W65bO8cS6XBJ0bCvxkg2pE0Yp5e2GWXfJxizt4VKpbLxNiofXxUq1zfJ86Ozhsjat9HiLnwZ6IY0XRHSTcnwMSm6xIDafP5EflapFEIqkeHxSVQ+2Yqefz9trEk0GoqithMMNcNzXUE03F/QedXQ+Bn+EdexYGJ4GxcLGzNCHhS/SPGH2gl1O19XDWlCI25joqGfIYa5gzjbKHDDmxNq+DMMoW64djpSf91qSml1vCOKhjRI4jJvmIfGIyAz7PAVrWV67c/cCIZbrPyKkG2T4ZGpJ26TL3dWWTFkq5GwSgwFQ5Z1C3sqjyffLQas8V4+Qx7De9nQFEN1IqawrjqKIctZ0iMPn7yRIdscH3l1YPlt2VDY8XNuiFcVPvdEQ2KYh2fyL8u6YkcxJLxzbflT0JyGRd9PRmAysR1bNiQ81wtIHma3oWLlJJx6suGRtpauySEsWefpLtA0x5AfQEL5rjsZCofd2JCPQCsIq/kOO5QN0/w8X2Jq39/eXh0T1ZCMvr2W+PUg/y7qj+e4UXBsNpC6qiFP0jSSXO/RWNdTDNNWch0uUmTDP30Y/l+9NH9T11Lh9sFsaHumurZiKMQ6zwExp6Gp6/EgUs74vuG91NB4BB6IX9BR/lv+5E0xfBiFPCx4uaP3LFnr1JsoRZGNS3YiKWpRTMKk3ETx5CL7Rc0cw+3TiB+mHZDiHio9oyuddpsopehl7a5N+QSPdGNXbxN5apH5sm2eYbKSnn5f8L54ZLf6bGFlAyrNsgb7PMpF033pIF1v9vnyrBqmq03mC9OFhmuNxT8pdYdBx+845XR6tIqlCCmNbJUd309eMlUTe3IXtnLXFRMz+h5vmP4wfJR/nJoMjZnai8UYw0XD9MVxzM4WW9HxcBljyM6Khaj82nwmfOHMbsNxWqnEKdyo0dBz0ZeP/er6+n6WlEe/zs62F+35AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPhv+A00L3serdfafwAAAABJRU5ErkJggg=="
            alt=""
          />
          <img
            className="w-1/3 sm:w-1/3 lg:w-1/3"
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            className="w-1/3 sm:w-1/3 lg:w-1/3"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA8FBMVEX///8AAAAutn3gHlo2xfDssi7g4OCtra339/eHh4fl5eWysrLfAE/fAFEes3e/5tPwoLSk28L6/v/0u8kqxPDssR/ttTenp6fz8/Pt7e1ubm7Nzc27u7sTExM1NTVnZ2f12aSo4vfu+v4hISFHR0d3d3eF0K7W1taampr9+O3qdpRVVVVdw5bh8+vX7+QtLS367dP52OHeAEfrrADvwF0iIiLCwsJk0POR3Pbv+fWS1Lbb8/xMv43B6/p31fTk9v0xMTG56Pn97vLnY4blUHr30NvxyHX55sPhK2PuvE6QkJDtkqnyr8Hz0Y7+/PRdXV0v/94nAAAFxUlEQVR4nO2Ya1vaSBiGJ6KYgGAXoRxCiFUiUKlnsZa226K2Vlv9//+mOcxM5gTdxL32Uva5P42ZMM6ddw7vDCEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA/5jam4uL9ztJ+fLDePyhlqMRO+GpffmXmpHZWa1HTKPyu2rEymXmRtathOLT+mLTZpynNaNwUV+NiSK3ElP9mLmR52w4pYL1T4RsVqniu6ytPGfDT8zwDSF/McPNrK08Z8Pp0hvWVpfdMBym9SU3JNOLeLtYYsNwpO6E1JbZkAHD+Tw/w9r7VYnPf0dPZcOD8cpHY47abvqHnrfbD5ol9shkOAl6ntcLumGxuF6OWJcSTtfp74atOJMFhmVKs51VcLUuG9ajlEY23AwT1BVDjtruWCm97jzDMn/H65ImLZbSZppe2spwnmHA3vAzCvJcVHRUVprLpFwdKz+dWDKHA5Nhqy++EzBdblg8lBrZdY2G7MNY/ayCO7pgnJeKhrwsB1EVDLtvMGydy+/0FMOu1krTYOiyyvPMx6mpyVDZD/dY+UD8pa11LZFSDL/or4mG+meyrHXNsMTrsk7COTH8KpwtDgRD6Zxxx4LS8WlcekQ35NPHbFgy1g0UQ3tXrMmKaR6Gp/watVohqaF8VqT/NZk2bsC+vWxYnCdIDXvmSsWQz+RuDsEwiNpa+jV6HgexGg/MxLAqh7Cd/M8O+9seWrZu6LO+HZbbdssV1t7YkI/RXjesnlCTnhJDPg6GJBc7n5O7C8bFNHl+MK5Wx7HUXnyfsSevMzQ6wsynJdGQz9WAvjPgG0NsyIJzR6ujFdNLApUa8mWUf83s1ETm1KvPaAwtb1iSK0TDsta3lmhY4haMIV1JU8M7vozu5xfMR7pN9xxXeC4asvElVIs7Pn3VE6pbrMAM+Tjffcq1W65bO8cS6XBJ0bCvxkg2pE0Yp5e2GWXfJxizt4VKpbLxNiofXxUq1zfJ86Ozhsjat9HiLnwZ6IY0XRHSTcnwMSm6xIDafP5EflapFEIqkeHxSVQ+2Yqefz9trEk0GoqithMMNcNzXUE03F/QedXQ+Bn+EdexYGJ4GxcLGzNCHhS/SPGH2gl1O19XDWlCI25joqGfIYa5gzjbKHDDmxNq+DMMoW64djpSf91qSml1vCOKhjRI4jJvmIfGIyAz7PAVrWV67c/cCIZbrPyKkG2T4ZGpJ26TL3dWWTFkq5GwSgwFQ5Z1C3sqjyffLQas8V4+Qx7De9nQFEN1IqawrjqKIctZ0iMPn7yRIdscH3l1YPlt2VDY8XNuiFcVPvdEQ2KYh2fyL8u6YkcxJLxzbflT0JyGRd9PRmAysR1bNiQ81wtIHma3oWLlJJx6suGRtpauySEsWefpLtA0x5AfQEL5rjsZCofd2JCPQCsIq/kOO5QN0/w8X2Jq39/eXh0T1ZCMvr2W+PUg/y7qj+e4UXBsNpC6qiFP0jSSXO/RWNdTDNNWch0uUmTDP30Y/l+9NH9T11Lh9sFsaHumurZiKMQ6zwExp6Gp6/EgUs74vuG91NB4BB6IX9BR/lv+5E0xfBiFPCx4uaP3LFnr1JsoRZGNS3YiKWpRTMKk3ETx5CL7Rc0cw+3TiB+mHZDiHio9oyuddpsopehl7a5N+QSPdGNXbxN5apH5sm2eYbKSnn5f8L54ZLf6bGFlAyrNsgb7PMpF033pIF1v9vnyrBqmq03mC9OFhmuNxT8pdYdBx+845XR6tIqlCCmNbJUd309eMlUTe3IXtnLXFRMz+h5vmP4wfJR/nJoMjZnai8UYw0XD9MVxzM4WW9HxcBljyM6Khaj82nwmfOHMbsNxWqnEKdyo0dBz0ZeP/er6+n6WlEe/zs62F+35AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPhv+A00L3serdfafwAAAABJRU5ErkJggg=="
            alt=""
          />
        </div>
        <div className="px-5 mt-[5rem]">
          <h1 className="text-4xl text-black font-bold"> Job Category</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 p-8">
          <div className="flex items-center p-4 bg-white shadow-md rounded-lg">
            <div className="w-10 h-10 bg-green-500 rounded-full mr-4"></div>
            <div>
              <h2 className="text-lg font-bold">HR Management</h2>
              <p className="text-gray-500 mt-3">223 Jobs Available</p>
            </div>
          </div>

          <div className="flex items-center p-8 bg-white shadow-md rounded-lg">
            <div className="w-10 h-10 bg-red-500 rounded-full mr-4"></div>
            <div>
              <h2 className="text-lg font-bold">Web Developer</h2>
              <p className="text-gray-500 mt-3">223 Jobs Available</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white shadow-md rounded-lg">
            <div className="w-10 h-10 bg-blue-500 rounded-full mr-4"></div>
            <div>
              <h2 className="text-lg font-bold">Finance Management</h2>
              <p className="text-gray-500 mt-3">223 Jobs Available</p>
            </div>
          </div>

          <div className="flex items-center p-8 bg-white shadow-md rounded-lg">
            <div className="w-10 h-10 bg-yellow-500 rounded-full mr-4"></div>
            <div>
              <h2 className="text-lg font-bold">Visual Designer</h2>
              <p className="text-gray-500 mt-3">223 Jobs Available</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white shadow-md rounded-lg">
            <div className="w-10 h-10 bg-purple-500 rounded-full mr-4"></div>
            <div>
              <h2 className="text-lg font-bold">Project Management</h2>
              <p className="text-gray-500 mt-3">223 Jobs Available</p>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white shadow-md rounded-lg">
            <div className="w-10 h-10 bg-indigo-500 rounded-full mr-4"></div>
            <div>
              <h2 className="text-lg font-bold">Business Consulting</h2>
              <p className="text-gray-500 mt-3">223 Jobs Available</p>
            </div>
          </div>
        </div>

        <div className="flex px-5 mt-[5rem]">
          <h1 className="text-4xl text-black font-bold"> Featured Jobs</h1>
          <p className="mt-2 pl-3">Get your dream job only here </p>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-1  md:grid-cols-2 gap-[1rem] lg:grid-cols-3 gap-5 mt-5">
          <div className="px-5">
            <Card className="w-[350px] shadow-lg rounded-lg overflow-hidden lg:w-[300px]">
              <CardHeader className="relative">
                <img
                  src="https://media.istockphoto.com/id/1279104620/photo/top-view-of-a-white-desktop-concept-job-search.jpg?s=612x612&w=0&k=20&c=Ow_kvA2wQ4rLlqX_oFHgpjLb1JMKyPQKLOPzbu6w6qw="
                  alt="Job image"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-[12rem] left-[8rem] bg-white text-gray-800 font-semibold text-sm px-3 py-1 rounded-lg shadow">
                  Tokopedia
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h2 className="text-xl font-semibold">UI/UX Designer</h2>
                <p className="text-gray-500">Fulltime - Jakarta, IDN</p>
              </CardContent>
              <CardFooter className="p-4">
                <Button className="w-full text-blue-600 font-semibold bg-blue-100 py-2 rounded-lg hover:bg-blue-200">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="px-5">
            <Card className="w-[350px] shadow-lg rounded-lg overflow-hidden lg:w-[300px]">
              <CardHeader className="relative">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am9ifGVufDB8fDB8fHww"
                  alt="Job image"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-[12rem] left-[8rem] bg-white text-gray-800 font-semibold text-sm px-3 py-1 rounded-lg shadow">
                  Choopi
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h2 className="text-xl font-semibold">Front End Developer</h2>
                <p className="text-gray-500">Internship - New York, USA</p>
              </CardContent>
              <CardFooter className="p-4">
                <Button className="w-full text-blue-600 font-semibold bg-blue-100 py-2 rounded-lg hover:bg-blue-200">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="px-5">
            <Card className="w-[350px] shadow-lg rounded-lg overflow-hidden lg:w-[300px]">
              <CardHeader className="relative">
                <img
                  src="https://media.istockphoto.com/id/475352876/photo/man-applying-for-a-job-on-the-internet.jpg?s=612x612&w=0&k=20&c=SQeciz8vqdGWu_KJoGC7yK8xmpBl69UewPtZSyWSrOI="
                  alt="Job image"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-[12rem] left-[8rem] bg-white text-gray-800 font-semibold text-sm px-3 py-1 rounded-lg shadow">
                  Bapi Course
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h2 className="text-xl font-semibold">Copywriter</h2>
                <p className="text-gray-500">Fulltime - London, UK</p>
              </CardContent>
              <CardFooter className="p-4">
                <Button className="w-full text-blue-600 font-semibold bg-blue-100 py-2 rounded-lg hover:bg-blue-200">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="px-5">
            <Card className="w-[350px] shadow-lg rounded-lg overflow-hidden lg:w-[300px]">
              <CardHeader className="relative">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Job image"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-[12rem] left-[8rem] bg-white text-gray-800 font-semibold text-sm px-3 py-1 rounded-lg shadow">
                  Alik Studio
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h2 className="text-xl font-semibold">Photographer</h2>
                <p className="text-gray-500">Fulltime - Jakarta, IDN</p>
              </CardContent>
              <CardFooter className="p-4">
                <Button className="w-full text-blue-600 font-semibold bg-blue-100 py-2 rounded-lg hover:bg-blue-200">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="px-5">
            <Card className="w-[350px] shadow-lg rounded-lg overflow-hidden lg:w-[300px]">
              <CardHeader className="relative">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Job image"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-[12rem] left-[8rem] bg-white text-gray-800 font-semibold text-sm px-3 py-1 rounded-lg shadow">
                  Tokopedia
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h2 className="text-xl font-semibold">Digital Marketing</h2>
                <p className="text-gray-500">Internship - Surabaya, IDN</p>
              </CardContent>
              <CardFooter className="p-4">
                <Button className="w-full text-blue-600 font-semibold bg-blue-100 py-2 rounded-lg hover:bg-blue-200">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="px-5">
            <Card className="w-[350px] shadow-lg rounded-lg overflow-hidden lg:w-[300px]">
              <CardHeader className="relative">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA1QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgQHAAIDAQj/xABAEAACAQMDAgQEAwUHAwMFAAABAgMABBEFEiEGMRNBUWEicYGRFDKhByNCscEVM1LR4fDxYnKCJFOyNGN0kqL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8ArPX7gtaWiHuCTQZXXPapGryl/AGeAtQBmgl+KvpWeIPlUUEntWfEfb3oCdheWlu7Nd28dwMYVZBkA+taazqlvekR2djb2tupBARRuJxzk+lDi/H5h9q5nmgnzanLNpsNk/h+FDyoCc9yeT5967aVZS6gxjjZRt5xzzQ82s4tRdGNhAW2CTHBb0oz09qj6VIZLcRu8i7SGPag81LRJrK2eZmzt9AaFQSESoR5EGrQeS01iyUTEsjpmSIDaBg/r2BoDcdOR3yz22jaZcveRsvhKmSHHGTzwKAh05FHNcW74HxMSPlTlGiIMNgYGaX9E6c1uxVGn0q4jYcAcEn9aPLpOtud34JkH/3GVf5mg9vbqz02Fry6JSJMKSFLcngdvpVc6rr0+qyCa9k8OLH9whOzOPTzPJrp1dfSzXoi8aN4kXhrefxEkB5B44zQGOPMmW/N2Gf4R7UBe1vr6ZQtukUC+RkG5j9BwKZtE/tZZ18LUNrf/jqVH0zQTSIsuNo/1qyeltL8Qo7DzoD+lTaylui6pbW1/AVO6S2BjkUEYOEOQePRgfal7q/oa01yy8fRUQSrHb2kCSfDHZRoxLHHcnBxjvViRW4RVC8Yrjc258YzwYW4xg+kg9D/AJ0HyxfWUkMzhBJNGHZY5xFsjlCkqSuTyMio8XjSRuyRu0aHkheBV0/tH6XGtRLqFlaXF1dBUght2kCRWoBJdiPft9qp+ae50sGINbbcnckUm7uCDn2oDPRUubiUHzeL/wCVWDJGwU5GDj51W/Qp36g8Y8zHjPzqzXEi5wM54oFrQ+tdZ1m7givNdi06OQf305bYD6HHrTTqtr1Dby2XhdUWt1FcyBZZYe0K8fEct8Xfy9KqN7+xYG1tdIZ2bKKpYs2RxwB3/wBKb9Fn1rT9NsbOXpuQb8RpPdDw1PPnnyA9uwoH/qDpuXRtInu77q6YyIhMasgUO+OB3J5oDpN308ug2171Hr1/FdSLloYnDDv5YHb51N1H9nnV5us2F5ooiYlidjIVJ8iNp3VG6Y6fudC6807R+ovwVw00MlzDLDGGDsP4SWUEAZJx7UBzS7XoPV7fxoNcmIHfxbxo2+xxWU2av0Z09rMyzX2mwNKoI3ouwt88d6yg+S79szDHkKjhjRv+xZZmhkj2yh1DOGOzb7eefnijVv07ZsqmayWMgjP793Dd8+Q9R9qBLDfStWYn1p70rQNNtJfBnhF5cMCW3fljX19qlN0jok07PCxeLg4il+EE84HGaCus8d/0raOMyOEyAT2zVkr0xosa/DZhm8t7sf61P0vR9OicMun2uV5BMKk/c0Hv7N4NNvNMJ/CxSOhCskib1STkZGeORjkUU/aLbQxaRYJGkabbo7gox/CaC6z1RB0xr90DZGVbmOGRBGwUIRGAf1qLrXUz9S2Vp+4S3VZN4+PLHyxig5RXDRRD1x39qcf2bzs2su2cH8O315FV/Ldw+BGIpt/HxfDjackY57jHngVqnVU+jwvLpszJe52bgRjb6ff5dqD6DncGSM528nPPtQDqbXnsLZ1juLeHKYSZ8yEP5fAvJFUNf9Za5frtu7tpFzna8jsoP/aWI/SuvTE91f3xEohdFwTwqsO/bA57UHe8ha4vGISNCTuKIgVQxJ4AHYD0rtHpTA84NF7GyM12zYz8bsc+2FH9aLR2i7hlRt7k0AvS4DbybmA2irU6QuI54k2AAj2pCtNNmv7po7cple+44C0xQz3/AEwY/HFvKrgFUjB+IezjIoLI34HPeuUrcb/MdqB2XU9pexxP8cYc7fiHY+lT57lfDODkUEHVRFIHEiK8c6lJkIBB47/aqf6u6ehguZre3uOl7CBxuTxgUlHy4J/SrUv5shufelzqRZZrFXiTSJmQkCLUosx/U5A++flQVB0tMLTVmG7JHIZDkHDdxVvyXNsvLOCc571UV0s0nVS+EdMEsrDiw+G3X2AA47U9Xmjy21vA094jF8fvAcL6Y5A5oD37JzYab1ZqVtNHGJrtAtrKQP4SSVHzBB/8afOt9LtOptFk00XUUV6smLaTd/dzAcA45GQSD7E1St5c2Fjjx9TG9W3L+HyWU+oIra619P7NeJtXuJm3hFkEj5ZefegsTo/9oX4FP7C6xiubPVrYCNXaIsJgO3Izz79j6+VcbqW61rrOLXrKKVGtA1rDHMANi7cmTHmck8VWXTkT6lqk0t5BJfQH4Gnll+KM9ww3Hn5Vb9nfG200TwzJGdm5dybjjy78D/fagHan1B1FFMI5NryLncI5NoHoewzkV5Wk+pX17J41xFDPngME5+uKygrO1kVDGsjqHwBjNMNlZXt4u23t3dvLjaPucUsdP2F5b3kt7d2ck0MhOL4EeG3P5gTjg1ZfTup6dHemB7hA6Rlvhwc9hjPbPIoK41C1vYdUkUsLUsXRpJWKflOGIP8AFzxxkVxtuqILAyRlpr2UkmScEAMRx59x70xdbNpnWGmT6no4MktnIY3ku5TEII1yxwpOCWyBVZNAqkAyx5JwFVTzQN1t1NdajcmKysVwoDOxfJRMgEkDuAWH/FM9tY9QzW/weFHJtI+EAZYSYBG4ngpk/PFDOmreLR9MguJoma6kbZFG0e2RXPDr7rwTzW2q64+nXcMyTC+jY5YNMV24bBChDtx2wTk9+xFBpr/TatctNrkl0XCybZCFH7tDgNlcKO4796APYWs+kyw2reJJZv4kZ3qHaI9+xxwT2q2lWG80iC4UPNaXSZaKUklQT3BPOPbPl3pXk6dittZN1lZ2kLTAkbRGckKqgdxjOefSgS7LQ4yyLPchPFxtYxs2M8iuF1p+nJfKo1GOSHI3FF3En0xnirCtrJp7x4BIXvETPgSRhVK+YXB+n1oL1RpVra3ELwTtaxNGqxWdrb7nVRkEse/fIz7UAE/h7eTwY4HUgKCzxrzjuQee/HOTXtrO63xmjtrcTKg3MCxPbyJpq0DR7S+t3iuo3YxYkiMjKHCnuvHlnn6n1rxLSysrhULRMF5CSDsc4Jz5E5xQexGe18IrGB4iuGyM/wAWf60WjLtEwCDJHGfWpyxW76b+JlCuFZgNp7ZCkH9G+1R/FSWMmJSM9ue1AT0OUafprTWmEmiJkf8AERDE48yGxkc57Gp9rLaahb280pCQXnEkTOPhkHO4fakvWEjhSafT5Yra6ZcPDdzOEI9Y1wc574HalT+27q1EfjE+HCWZWIxuJGO1BcVy2g6cjxrJGQB4hQHcQVI5+2a9uNdsJtqWbrtAxVIwatc3AnI3M0q+EPkTyadenLSUwRPNwdueaBsmud65BoB1VD+J0dMadHfYyf3koQR/9Ryef1okwKgDyBoL1eqvosYe0ubgAlswybQnu3PIoKyuriSw1SK4jito9o4WAgqRRK6vLzV7Y3chxGke1VBz5/z/AMqBX0YEnwosZI7J2ox0fL4pn012wJgWQ4zhsf8AH2oBpgcbmfyGcntW0xSNUNwACcYXJGB67R2+9HodJvmlVVs5iSSB8Bwcd8Hzpk0jpDplljfU49SmumUNIs9wIwPmAM+tBD6Z0qxiz+FvZJ7khnVtzCPGO2P86crC8dLUJDBPcCWIIURCxDjHGB6VskPTHT9rJBbW+mWgkGCrO8kjD5liaCWt4krxvaXxtJJ5DFA8Mpy+B25oCTauOlQIdReCGe4zJ4DpuaMeQOMjPP8AzXlQLnoXRX232tdT/vLokrJLOpLkd+SecZrKCuIf7XtJ1LCVRCdpikY7SueVI8wexrd0l0jUS1lcgxSxq6gyclCcgEj0I/SvJ9G1Ca2OpSXFtseRjInj/HEc8qy+R9qGTLMWUiOTDAKuUIBAoGnpVVjOoQyPBcm4iWXw7jPhlwcgk+mSaHPqjyXCWcEUDkyFSsMSLv552tzwcd81rocbxXEkshjWNYSMy/k8hz7UIhKvqi+LGjI0+CkJ2ry3ZT5D0oLTsIcX8AkZttrajaJTkqWOCSfM4BH1NE9S6V0vW4VENw9vdRDKyKiEfVcbsfWs1aTToum0S9ja2uoxvWSNsNsHGCR3+R86TU1rRreUPB+IlmwQHZskfU0FidPT6hFYyaTqgjeSyUCJ0GNyf1+daapb+NDJ+HeB2jXdHFc58MH3x2+fyoJovU02pXVjZ2sIjuH3gNIcYUDABP8A5GpVjr12zXqmYie3iIZY4suo7HaDnJ47YoFrUNc1Cy6ks5jkJZKqyyKhCs3O4c+WMD6Gh+ta7PcWMcr3VvGXJfw3UbyCxxj270b17Xel9Whku3t3M6NOFhe5ZQ3hgFdyH8u7OMY8j8qSdY1qK4ut0BBhX+6HgruQf4cnyBoPE1mW1aeSOZ5GaMIPLBzURL+eSR5GkIzxuJ7e5HnXBDNfSHJyzcflyTXZ7SeCZQ6PAyrkAxEkA9s0Fn9F3P8AbGjXVmGHiAHaPX+JT/8AIVN0S3cqVcHg/alf9nVyniSHdJ+IUAySnARMnhR78Zqw0eF5GeAgODmZF/gY/wBDQdY7CK6Tw5YkYehH9ahal0VoF+Qbmzl8RRjck7jP60ZthuGRU7aQmT3NAsw9KaZaiP8ADWUaBR7k/rUmeBItqoAABRguzZGeKG3aEsMUA8ruByOO3rSh14zvEtvDBevMIvg8E/u5AT8QYDngDPt96c7l0gi3MwAB8zily1tFl1Br+5EsAjYXHiePlQwBDLg8Yx/vzoAPT3RDahFHLdHxcpFPAUbEMgJ5ViQSePIVYKaZoeiKGnu7axijufHjXMcAAK42nP5h5+tLKa1qOtXJsendtnYxjbJeBecf9A7Afqfambp/pbRrWQTTQNfXpxunuW3n6elBlne9IxvA8eq2x/DtK0bPc5AMn5uexHp6eVQZuntCubO0Gm3ENzb2VtJDCgkWVCW/iYjuQaf7aCJBtWCNR7KKFa9ptlKu+SyQS9/EjXY33FBUOudP3NrH8UoeKG133V5MxYM+fyoucD7fWlRLy70cxtB40E4Iki8dMHaR3APkati6iljG1j+IjPG1h8QH9f50s9Q6ImpRTTW0Ymu7h0QSSNxCg77f1496BEOu6gbG3sjN+4t2doxgcFyC38hWVFvLaO1uZYRKsojcr4iflbB7ivaC8Z9PuOn9em1iwtBLHdKFvLY4LwvnAmUc9+c/7xXnVuqXurakL9orua14UYbcsb9ioK5HfBxzzkVZ/WHUNnbXjWtnFLLqSZ8QwFVAODhZD3PfIHt3FK1/NMVkuLa2ie4xtDeDh3csqoM+eSW+QoFm+kfTdIBnCxzyJ2KBhnGQjDyJGftSXwTjIHP2ohrWoy391Jv3IodhtJ5xk4DepGcVHht45I8/i4kIH5SDQWJJJ/a3REU/glTGVEcJnMm5B8I3YGeSuRn0oPplzaXyzWP4Kf8AtDIEZs8YOO454+tcehNfj6c1ApdeD+DkJkuJDHvZwqttQDtgtirk0+ysGnNxZxoAOBGcB4TjO1T6Y8j28iRgUFVaXpOswXUty8csIK7AshILDOeSK7CyksBcahPcXL3DBgzodzKD5ge3f6VZF7AfjeUBU8iWGflgVWnW2qpGvhwBt+8pvjk2tG4xkEeYINAlz+Le3UxRpbiR2LbmwCw9cUw9G9N217OJdaVxAH8MRb9m4+ZJHbvQ7R+o7rTNLu7GC1tZ4Zn3kzx79hxjg/b7U69K3dxrXT9xbafZ29xdCbfJDLwsZ8mDemKDfqPoe10/ddaRck2a4Lo4DNF6EMO4/UVGn0p9b0JnkMl1Lbk5RWAMnHw5Pt/lWl/q2saVpl5FqEcdukqmNUQcZPp9qWLXWZ1sruBnLpKqoQxODzn+QoIel3c2lXhnEMTSW+SIt3AcZGTjuRzVq6PfrqUaXdhcx/io/wB34pXEc+ANwx3xz38qpl3wzhFCdxgHNTdK1i80qYyWkhysbpFvORGWxllHYHig+hNLvoJ5BBKwtLvHxW0zAA+6N2YUal+AiOVGU+WV71W+h9Z6Vq+LS8ijZJZjHHHIBuVFj3GRs+pyOPUUdttS0r8MJLPUrq2iMUUoUXDhQshwnB7ZPlQMLQkvhCzeZCih11PCHIVlcjuF5A+Z/oKGXeqWH5Jrue9fdKoiklZ1LxjLrgnbke9JnUfXEWAtmUdcRSxoOVljZTuR+PhIPl7CgN6lf/ibv8KoI2sFYGMlTldysD6DFBtdna7nj0WzO2IczsO2e5z/ADPzFRuk/EWwa9uIpoykWIw8u5DFksuB5YBxU7R4ABJcSjMjnaSfU8n+YH0oDGlwxW9ssUCiONfP/FTXpV2gIVOfelCSfaAo4x5VJ0+7bxQFYjnmgsSK5XHpQ7VbkMcBhXGzbxVAGWPfFcLiNjKxVcY70AW8XOcHaSe/ahM4/NIi4xgMuO/vRS/kKsVYc0PkO7cfbkUCxrWiXGovEtpPb21vEDtjEXmTkn+VZR1SsLFXOAeRk/pWUCNqOsXct3+DtppAwbEspYtIzem48/WnL9nst5HerAtw1z4hCskrZP0865dL6DpitDFrVjAhmP724klKSbj6EH4eaE9Q22o9N6nLYW8gmtixe1uAPjK+XI7MOxx50Ej9qXSq6fKlxZQSKEQKYo48JFEo5Zj5sS3fzqu4PCD/APqMlfQGrdGpXvVPT6wavAbmaKMqTv2NNtII3H38/XBqpruBre5kikCIY3IYKc4x5A+dAat47jXru2hwGWG2jgwgwzRoccZ4J+LJ+VWd0vp/9jwJFc3cYPOdznLOWILbiRnK7ePIiljp2IaXoQmWMm5lZUiRnDBnbswPpjk/I0bD2+lwPPdCaWZ4z4t0o+INjgk5+FRwQPbyoJ/WdtqTaYZrH/1MeADCpLLceIfD2Y8gAwfPbI+tU/erJNcyxalK344SBC+QcbRjBx8qtroXqGbUTPavHI+xA4nZNoY+Y96U/wBoej29pMLy3aK1gJCCKKLMszksWJJ+nnQBtNsrCBFN9umjXnYWwD9B3onNd6Np8R1PpmWSyvYwdyiUlT7YP8iKVruWZrUZR0QcANUIQs8cjjOUGSPUUDTYdUWt7Pv6nthfMWbDOMJGoQ4CqP4i2OfSoOp3FtesE0i2EaEAlVACcr8QOfMHz9KXhnNOXR9g0j3Ega3P4aHxDG7f3g9Ae2fY96BRlhkhcxzI8bAcqwwa9jXJ5IHzpz1vT7SeCdUKh1g/EW5H8PqvyxyBS5oEkMOqQS3AUxpIp+IZGff2oN9FsLS8nlS/uGt0SB3QqoO5wOBg+VdYpZY1ZI55djKm5CSAMHIXv2DZx/KpfUclrca28mmQpHCzBmCD4d3mV8sfKtDHwTQcJJJpt3jSPJl2c7jkbj3b5muLw7gw5AAzjPapm3ArRlIzjzoGvSbdYdC8EW0kG87Skj7ic+Y9Ac0ULbEx/wBbH9f9KhaFD4unqiRTpg71EpznGCce3Hail1bNG7hlI+M9/maAbcz4djmj/SunSXmyaSRYoiTgtyWx3wP+KX7+Egk44NOHTk6poEggNwtyAo8dACIvMDnyoCl8Htj4Gn3lybonIjDmLPuAOG+9QLC+1G6kMF2xeU8o/Yk+jf51Bt9VNxc3Wk3pR7iP4xKpIIPqp9exowmu6TBpcdzdyK1zIjBwozlhwT9waCK9hNdxNI6bSckN5fL50GeIxuYz96J6n1dEXdIE2BlWTkjPIBP60ty6j4n7w4GTQd9scuQ4B2k4zWUGkvD4jbSQKygC6ze6Za61deBZtKJHLrGG+FM8kAensK53/Ul02kxQvAsZSbMbee3ac/rU3WND1nTL+/ju7HEcJXxJLaYMoyODng/px51Ku/2fvFoiasb+O6SUZQRliBn3POe/kKBf0TVbme+SB5mSOSVQxA7DDZ/mKD6qgi1GRAkMY3DAjfco+Rpgs7BbMnKbdgLs5+I8e1LV6++7lZfD2lu8Qwp9x6UFi2MWBpabIxFGryAQnMYfsMH/AMiacLG60RonsdWCEScMfzcn5HI7+VA+nNSgTpICaG3ltrhAjxxYCxtjJGPI/wBaV36ojUGPTLBASPzkZJFBY+kaRPo895Y2kizadKPEgdjllYeX8xnz4of1Em6xkxeLbkxkGRRvKgjnA8yRSTb9X6jbW0ETyuJfG3DaMkIByPlXWxuZ57dhLLKPiP8A4jyoFd4rdhMd1xIqk4kkHLe+K2sLnxrnw5W3KUMeWAxgqR/X9BXmozeO0266luechlQpn6cULhcoSRQaFQODRKzuh4DQiR1452+lC2ORnzzzXiBs/Dn6UDjpNuNU1ACRjFAsXh73bHHt/vyraTobVIWJhMF1F5GCYAn6Nj9M0psk7xb2bdGO+W7fSutreXkDg293PFjsUkIoGObS9StAPHtrlQP/AHYNwH1Wo6S7z8Iik55CSYOfka1s+stbtCAb1Z0H8MsYY/cYP60Xi6th1P4dU6ehuj/7igE//wBf50ArxkB/eK6H/qjyPuK8LxNyjK2PJW/4pv07QNL1VN9npuoWrHyVzj7EsP5VpqnRNxBtDzlAfyrdwd//ACFBt0VKFZPgnKhgHeQ5TnjC/Sm3VoCjRSEZ3xgk+pHwn9QfvSJpOj6hpFxvltTKpI2/hLr4BnuSrEeXtVhpKl3pOfzMmWYeecANj6AH6GgW76HMfyrVHt5YWguZXt2IXwWE3hxOR23nPHf6jHpxJk+IstcY4493hzoGQ+ozQKzX1zY6jJcP4bzAFQIpN6n33Dg1BvdVeb8PaK5ZIkwzDzPc/qTViQ6FZ3MmZYIpk242yZYD71xu+k7BAzRWscKgcbBigRxcyXUrTtkZO0Y9B2ogMyRAt5Gu81gkbERrhQa8dQiYHfyoI3ma9r0kqcKPnXlBdPUVlJcqZrPHjojEREqqS5/xkgnFVRf3b6TdywQi4so3YnwWBWM87c4YEYJ7fpVz3n5W9lNAuqzajQb2a9RSkcBLMVDEelBSWo30l04jjLPLIMKF+EjvjGPQg5HnXbRtM01pzaStPJcOrJM8EZYJuGDnjvUzTrmyupj4FvtQNwzcE/yA+1HrvR9NtLCKGzhWC9nXfA0UrFJG77SSSQ2AcHPJGOPMN9S6ba0hltLKcRWl0zOsaWw2opIwORkN3qfonSlo2ktaTFUuFyTMsYO/JO1h7YwPY5B5FC9L1bU9RgfS9UIW4jAMLzcEg9gT3POPvipeidW2qyz2lzJC34fxH/d7sRxoFyd3fPJ7d8djQBjoFz09qcl2kkd2+CoyuNo7cDODkZ75HNDolurVbqe5AVCMjYNxQe1N2q6tY7ZXLKxjBJ3ShgMYzkAA8ZFI3UWsKS0SuFkVjkhtrKR58d1INAvTB7i4fxJJZA5OXwEyPUCsju7KJd1rpiyspBEl3Izjj/oGB98io6OjTZOUX/Eo+I/euxA8J2RQEUEj4hz/AK0ES+vp76RWuWTKDaqxxLGqj2VQAKjoQG5B9qKWelTXMau8YxJnbg+mM/zFNmkdENIjTztDbwIAXluJVjRR5ZZiB60CTFbXM/wxxtg0VsemLy7dV8N2J7BQeadfxvROhBhcX8mqTL2jsE+HPpvbA/Q1Buv2q30SNB0xpFnpcZ48Xb48x99x4H2oCei/squjGJ79I7SLGTJcsBx64/4ok93+zrpcgSXx1a6Qcx2a7k//AG7frVU6trOq61IX1jVJ7lv8LyFgPoOBUAmJeybj6t5fSgtDUf2w3YTwemdGt7OLsHmHiNj5DgfrSlqvWXUesujapqbShGLLEsaKgJ4/KoApcacnuePQcCuZkY9uPlQGo9YvYpC4u5VBOSA5x9u1WJ01rn4q3SZGSIsf3alwWIXgtj2OfpVQj70U0a/m064MtuI1dxsMjJuKDPce9BcVxbJIfEh2he7ID/dn0+XpUUx87JOG8qiaVq8d0n4m0kZcO0as648THfAPcc/zozahb1wqRgS/+0TkH3U/0oN9OjkjGVyRiut2ski/xfyqbBbeGvxRyR/9ymuVyjY4bj1oFy5twASaE3Cjnj/SmaSxuLjcIY5JCBydvAHqTQ2+NrpW1t8dzekfAiHKr7+9AGnC2e1JQDKwyy5xtHkD71lC77U5YXEyRi7EpO6RHz8QPOaygvLXtTh03Sri9uGG2NMAE/mY8Bc+54qjdd6qvtVu2a+u5sFsi1iPwKM5AIHfHbJ70/ftH1J06dt1Xdskcs5EuMgDsV7kH9CBVTWcBNuskg/eTMTvcY3H29aBk0QpDay3Vnl5I1B2MwVs+pz37nj0+VC4eomtRe29qmY2cNGX8mB7j/OmzpvQrORpol1Lw7h48pFcKqGT12kEjI9DzUCDp3R725kkuri6MkTlfD8RVWfAycHaSOOe32oFiXX7u51tplfO4lBtHlmo2uTGW7fEryJyCAu0D296N3ujadpNwLmBmKjkRyHsTwBn5+dKd9KJHc5OM/CGOSB6frQeSajeSbt9zIdxYtk99wwfuK4oWbLsScetcTXaM4if50HrnC8ccV7DKfGi4aQKw+A9jz2ryLYzKJMhM4JFMdhZ29lavPM2AeG3d/l7g8GgzS4dSE8Vwkzwzo27cqgkEnae/GR3ohP07qGsM1zeXFzdz4XLSvu7tyB6ADmocN3f3/8A9EqQQDjxJBkn/f1o7pEepxTDZrMg8sGFWX7UCve9PzWgZvCYqFkfIP5VVtpZvY8Y+dB51kG7a2UGeAMYFXbBY3rxMNRit9QtnXa4hXa2PdCefofpSd1T02gEt7ayhgDLLKxBLsSRtQL5eY9aCuc1lEZbdoZHSX9xMG2ssncVIu7NPAWWTU4JWxygGGWgD10t4nnfYg5rmRg8Zx5V3tnMbbXAA9xQdGt3iPxwyZ9xxXMysv5VxRmJw6Bo/hI86yTw8HxoY3HywfuKCBp2qXVjcLNG+9kVgiycqpYYyB6066P1RGYmMzsPCiQmTPxSPnBG3zpVEOlTAAtPA47Zw6/0P61utkUG63ljkUehx+hoLdsuo2gV4hdvH4UgjYJIAN5xhSGBGeRwKlS9Sz527zvJ2gCOIEn0ztP8qphNXnRCocsfGWU/96nIJ9a1m13UI5EcyIG/EG6GF7ORg/THlQWRqHUMt0iKbrfvRnjG/dv298fw5HyFJep61GELRSkvLEskUqNllbPKsD2pckvrubZEJXyJGdAnGC3fGPWukGnMxAuXKY5MSLuf5kdl+ZoOU9681xJM3ho0jbmCrgZ9qyuzG0gO0eDj1dTIfvwPtWUFmdQKmqDTLG6RdkzFWkUfGB2wD6c/oKXNDuZHiuoJj4sMyiNo5CSAN2Mj0I8iPSvKygC6LADqy5d8wyEoc85VuKYuqkjtbK5aGNQ5do9+OQCwU/oTWVlAkXGo3Ny7+I+M5J2jGc4z/IVC75JrKyg8rrH/AHT/ADrKygk6PGJLvkkbFLDH0/zotqX728itySIlxhR75/yrKygNYCKqJwoAAA8qI2PwyoR61lZQPtjITAPYihXUJ8N1uFJEhZVY/wCIH1rysoK26uhjt72IwoFe4DSSv3ZiSPP05oJdRoZi20cKB9gBWVlBDB+PAAA57UxCztZhZv8Ah0j8dCHVMgZA7j0NZWUEfTlAlkj/AIVbAr2/+HOKysoBW47q7rM0QWRQCVccMMg1lZQa3SiOd0QYAY1ztIVuL0RSE7T6VlZQTLZiizeH+7CjGEJG75nv+tRoM3JijYlY3bBROBx7VlZQEJ5UsGEcNvAQRkl03GsrKyg//9k="
                  alt="Job image"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-[12rem] left-[8rem] bg-white text-gray-800 font-semibold text-sm px-3 py-1 rounded-lg shadow">
                  Tiy Comp
                </div>
              </CardHeader>
              <CardContent className="p-4 text-center">
                <h2 className="text-xl font-semibold">Mechanical Engineer</h2>
                <p className="text-gray-500">Fulltime -Manchester UK</p>
              </CardContent>
              <CardFooter className="p-4">
                <Button className="w-full text-blue-600 font-semibold bg-blue-100 py-2 rounded-lg hover:bg-blue-200">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="px-5 mt-[5rem]">
          <h1 className="text-4xl text-black font-bold">Latest News </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 pl-0 mt-5">
          {/* Card 1 */}
          <div className="px-5 sm:px-0 md:px-2 lg:px-2 xl:px-5">
            <Card className="w-[350px] h-30 md:w-[230px] lg:w-[300px] xl:w-[350px]">
              <CardHeader>
                <img
                  src="https://media.istockphoto.com/id/1218610083/photo/portrait-of-cheerful-businesswoman-smiling-at-the-meeting.jpg?s=612x612&w=0&k=20&c=W36r8Hdns6UKLlbsMZJZJG1hFUOHqeVb72l4UekMXNA="
                  className="h-60 rounded-3xl"
                />
              </CardHeader>
              <CardContent>
                <h1 className="font-bold text-xl">
                  10 ways to get you in get a job at the company big in the
                  world...
                </h1>
              </CardContent>
            </Card>
          </div>
          {/* Card 2 */}
          <div className="px-5 sm:px-0 md:px-2 lg:px-2 xl:px-5">
            <Card className="w-[350px] h-30 md:w-[230px] lg:w-[300px] xl:w-[350px]">
              <CardHeader>
                <img
                  src="https://img.freepik.com/free-photo/portrait-man-working-laptop_23-2148898741.jpg"
                  className="h-60 rounded-3xl"
                />
              </CardHeader>
              <CardContent>
                <h1 className="font-bold text-xl">
                  Bujaga is a former convict who is now successful work in the
                  ...
                </h1>
              </CardContent>
            </Card>
          </div>

          {/* Card 3 */}
          <div className="px-5 sm:px-0 md:px-2 lg:px-2 xl:px-5">
            <Card className="w-[350px] h-30 md:w-[230px] lg:w-[300px] xl:w-[350px]">
              <CardHeader>
                <img
                  src="https://media.istockphoto.com/id/1354842602/photo/portrait-of-a-young-businesswoman-working-on-a-laptop-in-an-office.jpg?s=612x612&w=0&k=20&c=kfP1g2712RiaxsDriIxFo363ARlaL2D591s-22CnIo8="
                  className="h-60 rounded-3xl"
                />
              </CardHeader>
              <CardContent>
                <h1 className="font-bold text-xl">
                  10 ways to get you in get a job at the company big in the
                  world...
                </h1>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="w-50 px-[5rem] bg-blue-200 mt-5">
          <div className="flex sm:flex-col md:flex-col lg:flex-row xl:flex-row">
            <img
              className="h-[60vh]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3YAUxvg-Hg9hoJ5VGeHq9LtG8Z0RK4Afi_Q&s"
            />
            <div>
              <h1 className="text-4xl text-black font-bold mt-3 p-8 lg:text-2xl xl:text-4xl">
                Get your dream job,
                <br /> just by uploading <br /> your CV
              </h1>
              <p className="text-sm text-black font-semibold px-8 lg:text-xs xl:text-sm">
                Tayqudo wants to help job seekers to find jobs that <br />
                match their interest as well as your expertise so that <br />
                you can earn.
              </p>
              <div className="px-8 mt-5">
                <button className="btn btn-active btn-secondary sm:mb-5 lg:mb-0 xl:mb-0">
                  Upload Your CV
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[5rem]">
          <div className="flex">
            <div>
              <div className="flex">
                <img
                  className="h-8 w-10 rounded-full"
                  src="https://t4.ftcdn.net/jpg/04/51/06/95/360_F_451069523_KiIeRNYBxANx23WgBk3xY0jRGTAN2Tb3.jpg?color=indigo&shade=500"
                />
                <h1 className="text-2xl font-bold px-3">Tayqudo</h1>
              </div>
              <p className="w-1/2 mt-5 sm:w-full md:w-full lg:w1/2  xl:w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                quis.
              </p>
            </div>
            <ul className="px-6 lg:ml-[3rem] sm:list-disc lg:list-disc md: ml-5 md:list-disc">
              <li className="font-bold text-xl">Solutions</li>
              <li className="text-md ">Employee Helpdesk</li>
              <li className="text-md">Space Profile</li>
              <li className="text-md">Service Marketplace</li>
            </ul>
            <ul className="px-6 lg:list-disc md:list-disc sm:list-disc">
              <li className="font-bold text-xl">About</li>
              <li className=" text-md">Product</li>
              <li className="text-md">Resource</li>
              <li className="text-md">Term and Condition</li>
              <li className=" text-md">FAQs</li>
            </ul>
            <ul className="px-6 lg:list-disc  md:list-disc sm:list-disc">
              <li className="font-bold text-xl">Company</li>
              <li className=" text-md">Our Team</li>
              <li className="text-md">Partner with Us</li>
              <li className="text-md">Privacy Policy </li>
              <li className=" text-md">Features</li>
            </ul>
            <ul className="px-6 lg:list-disc  md:list-disc sm:list-disc">
              <li className="font-bold text-xl">Contact</li>
              <li className=" text-md">+91 1234564325</li>
              <li className=" text-md">tayqudo@gmail.com</li>
            </ul>
          </div>
        </div>

        <hr className="mt-[5rem] text-gray-300"></hr>
        <p className="text-center mt-2 text-gray-500">
          2021 Copyright Tayqudo. All rights Reserved. Made in India
        </p>
      </div>
    </>
  );
}
