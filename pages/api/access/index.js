import {
  getAccessToken,
  withApiAuthRequired,
  getSession,
} from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function handler(req, res) {
  const session = getSession(req, res);
  try {
    const { accessToken } = await getAccessToken(req, res, {
      audience: "https://storkserver.xyz",
      algorithms: ["RS256"],
      scopes: ["admin"],
    });
    res.status(200).json({ token: accessToken });
  } catch (e) {
    res.status(400).json({ error: "Not validated properly." });
  }
});
