import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

export default async (req, res) => {
  const { email, first_name, last_name } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      merge_fields: {
        FNAME: first_name,
        LNAME: last_name,
      },
      status: "subscribed",
    });
    return res.status(201).json({ error: "" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong..." });
  }
};
