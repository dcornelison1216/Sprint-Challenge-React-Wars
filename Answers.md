# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a web development language created by the makers of Facebook to manage massive amounts of data that is updating in real time. The primary problem this language solves is allowing development of larger-scale applications that will have their data changed over time.

1. Describe component state.

Component state is a temporal slice of data. If I had a list of all Tweets from a given individual that is current at this exact moment, they may Tweet again 10 seconds from now, causing my slice of data to be incomplete. State allows us to update our data as the available data changes.

1. Describe props.

Props (short for "properties") are the building blocks for components. They are passed from parent components down to children and grandchildren and are the qualities (properties) that we will be assigning to the components being created.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects in React are anything within a component/function being executed that will affect anything outside the scope of our function/component. We use the useEffect hook to sync the side effects with state or props.
