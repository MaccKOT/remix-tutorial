// just initial state to our database

import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getJokes().map((joke) => {
      return db.joke.create({ data: joke });
    })
  );
}

seed();

function getJokes() {
  // shout-out to https://icanhazdadjoke.com/

  return [
    {
      name: 'Wizards',
      content: `Why do wizards clean their teeth three times a day? To prevent bat breath!`,
    },
    {
      name: 'Frisbee',
      content: `I was wondering why the frisbee was getting bigger, then it hit me.`,
    },
    {
      name: 'Corn',
      content: `What do you call corn that joins the army? Kernel.`,
    },
    {
      name: 'Skeletons',
      content: `Why don't skeletons ride roller coasters? They don't have the stomach for it.`,
    },
    {
      name: 'Hippos',
      content: `Why don't you find hippopotamuses hiding in trees? They're really good at it.`,
    },
    {
      name: 'Coffin',
      content: `A man tried to sell me a coffin today. I told him that's the last thing I need.`,
    },
    {
      name: 'ID',
      content: `Did you hear that David lost his ID in prague? Now we just have to call him Dav.`,
    },
  ];
}
