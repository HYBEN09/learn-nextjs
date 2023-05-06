// /api/new-meetup
// POST /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    // MongoDB 클라이언트 생성
    const client = await MongoClient.connect(
      "mongodb+srv://byunhyebeen:sD9Exda81L74HIdd@first-project.6uro6j1.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    // 연결된 데이터베이스 객체 생성
    const db = client.db();

    // Meetup 컬렉션 가져오기
    const meetupsCollection = db.collection("meetups");

    // Meetup 데이터 삽입 및 결과 가져오기
    const result = await meetupsCollection.insertOne(data);

    // MongoDB에서 반환된 결과 콘솔에 출력
    console.log(result);

    // MongoDB 클라이언트와 연결 닫기
    client.close();

    // HTTP 응답 보내기
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
