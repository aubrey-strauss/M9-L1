Reflection Questions
How did you handle optional props in your components?
    Only rendering something that was passed using && and using ? for optional props

What considerations did you make when designing the component interfaces?
    keeping it simple by using just an id for callbacks 
    using children to nest alerts

How did you ensure type safety across your components?
    making sure they're all in the same file (index.ts)


What challenges did you face when implementing component composition?
    deciding where to put the alerts
    using null vs true/false. I went with true/false bc we hadn't gone over null yet when the lab was assigned.
    nesting children properly