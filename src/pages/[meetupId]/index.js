import MeetupDetail from "@/components/Meetups/MeetupDetail/MeetupDetail";

function MeetupDetailsPage() {
  return (
    <MeetupDetail
      image="https://thespreadissue.files.wordpress.com/2016/04/354a91ebb4654dec1b365e5eff5ddd4b.jpg?w=423&h=282"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="This is a first meetup"
    />
  );
}

export async function getStaticProps() {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://thespreadissue.files.wordpress.com/2016/04/354a91ebb4654dec1b365e5eff5ddd4b.jpg?w=423&h=282",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
  };
}
export default MeetupDetailsPage;
