

const send_sms=function(body){
    const accountSid = "AC2fa7b9e71e58a86a581e59ac9d790b26";
    const authToken = "790d93042d48bf871f58a2dc0c5343b6"
    // const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require("twilio")(accountSid, authToken);

    return client.messages
    .create({ body: `${body}`, from: "+17432285481", to: "+12818275476" })
    .then(message => {
        console.log(message.sid)
        return message.sid
    
    });
}

export default async function handler(req, res) {

    if (req.query.key=="xwlGENHTiaTycCQQHgXVcf57M34ZWD1R"){
        let sid=await send_sms(`${req.body}`)
        // let sid="test"
        console.log(sid)
        console.log(req.body)
        res.status(200).json({msg:"Access Unauthorized",sid:sid})

    }
    else{
        res.status(200).json({msg:"key missing or incorrect"})
    }
    
  }
  