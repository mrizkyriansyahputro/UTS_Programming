import type { NextApiRequest, NextApiResponse } from 'next'

 
interface  ResponseData {
  location: Location | null,
  social: SocialMedia,
  phone: Phone
}

interface  Location {
  country: string;
  city: string;
  street: string;
}

interface  SocialMedia  {
  email: string;
  skype: string;
  telegram: string;
}

interface  Phone  {
  suport: string | null;
  office: string;
  personal: string;
}

 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const response:ResponseData={
    location:{ 
      city:"Jakarta", 
      country:"Indonesia", 
      street:"Jl. Kramat Raya"
    },
    phone:{
      office:"021 999088",
      personal:"0898 2039 0204", 
      suport: null
    },
    social: {
      email:"rizky@gmail.com",
      skype:"@rizky",
      telegram:"@rizky"
    }
  }
  res.status(200).json(response)
}