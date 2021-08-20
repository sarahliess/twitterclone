const [messages, setMessages] = useState([
    {
      id: "fb1022",
      text: "hello world! This is my very first twitter post. I hate my life. Corona sucks. This sucks. ",
      date: "19-08-2021",
      user: {
        id: "fb1122",
        name: "Frank",
        email: "frank@gmail.com",
      },
    },
    {
      id: "fb1023",
      text: "It is a twitter project!",
      date: "19-08-2021",
      user: {
        id: "fb1123",
        name: "Fredy",
        email: "fredy@gmail.com",
      },
    },
    {
      id: "fb1024",
      text: "hello twitter, you suck.",
      date: "19-08-2021",
      user: {
        id: "fb1124",
        name: "Dennis",
        email: "dennis@gmail.com",
      },
    },
    {
      id: "fb10222",
      text: "There is only one planet! Very true.",
      date: "‘19-08-2021’",
      user: {
        id: "‘fb1125’",
        name: "‘Sarah’",
        email: "‘sarah@gmail.com’",
      },
    },
    {
      id: "fb1028",
      text: "There is only one planet!",
      date: "‘19-08-2021’",
      user: {
        id: "‘fb1125’",
        name: "‘Sarah’",
        email: "‘sarah@gmail.com’",
      },
    },
    {
      id: "fb1023335",
      text: "There is only one planet!",
      date: "‘19-08-2021’",
      user: {
        id: "‘fb1125’",
        name: "‘Sarah’",
        email: "‘sarah@gmail.com’",
      },
    },
    {
      id: "fb1024445",
      text: "There is only one planet!",
      date: "‘19-08-2021’",
      user: {
        id: "‘fb1125’",
        name: "‘Sarah’",
        email: "‘sarah@gmail.com’",
      },
    },
    {
      id: "fb1026’",
      text: "‘Take your time!’",
      date: "‘19-08-2021’",
      user: {
        id: "‘fb1126’",
        name: "‘Soraya’",
        email: "‘soraya@gmail.com’",
      },
    },
  ]);

  useEffect(() => {
    fetch("https://mini-tweet17.herokuapp.com/posts")
      .then((response) => {
        console.log(response.items);
        setIsLoading(false);
        setMessages(response.items);
      })
      .catch(console.log("This did not work"));
  }, []);

  if (isLoading) {
    return <div>Is Loading...</div>;
  }