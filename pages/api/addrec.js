// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from '@prisma/client'



async function update_sqlite(name,email,post,rate) {
 const prisma = new PrismaClient()
  const review = await prisma.reviews.create({
    data: {
      name: name,
      post:post,
      date:Date(),
      email:email,
      rate:rate

    },
  })
  console.log("//// Sqlite3 reviews /////\n",review)
  return review
}

export default async function handler(req, res) {
  // console.log(req.body,JSON.parse(req.body).name, JSON.parse(req.body)["name"])
  let result=await update_sqlite(JSON.parse(req.body).name,JSON.parse(req.body).email,JSON.parse(req.body).text,"5")
  // res.status(200).json({result:"success"})
  res.status(200).json(result)
}
