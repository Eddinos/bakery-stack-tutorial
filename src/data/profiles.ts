export type TProfile = {
  name: string;
  picture: string;
  abilities: string[];
}

const profiles = [
    {
      name: 'Miaou',
      picture: '/static/miamiaou.png',
      abilities: [
        'meow',
        'sleep',
        'roar'
      ]
    },
    {
      name: 'CrocCroc',
      picture: '/static/crocroc.png',
      abilities: [
        'bite',
        'chew',
        'eat'
      ]
    },
    {
      name: 'CoinCoin',
      picture: '/static/coincoin.png',
      abilities: [
        'quack',
        'swim',
        'hairstyle'
      ]
    }
  ]

  export default profiles as TProfile[]
