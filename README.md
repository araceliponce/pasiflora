# PASIFLORA - Online Plant Shop

## The Project
Pasiflora is an online shop for purchasing interior plants.

It aims to provide a seamless shopping experience for plant enthusiasts who like to shop from the comfort of their homes.

You can check out the live demo [here](https://araceliponce.github.io/pasiflora/)


## The Process

The design and development process for Plantify involved extensive research on the target audience and competitors. 


## Key Features

- Responsive design for optimal viewing on all devices
- Easy-to-use interface for browsing and purchasing plants
- Accesible collapsing elements that work using the mouse and the keyboard

## Technologies Used

Pasiflora was built using HTML, CSS, Liquid and JavaScript.
It also uses [accessible-toggle](https://github.com/elivz/accessible-toggle) for managing the collapsing of the navigational elements keeping their accesibility.


## Learning #1

In the making of this project I learned lot of loops and conditional using Liquid and yaml files.

Here's a code snippet that shows how I simplified the renderization of the featured plant cards on the homepage of Pasiflora:

```html

<div class="auto-grid featured-plants mia">
  {%-for plant in site.data.new|limit:3-%}

  <article class="featured-plant relative">
    <picture class="relative">
      <img loading="lazy" class="plant-img" src="{{site.url}}{{site.baseurl}}{{plant.img}}" alt="">
    </picture>
    <h3>{{plant.label}}</h3>

      {%-if plant.discount>0-%}
      <s class="plant-old-price">{{plant.price}}</s>
      <span class="fixed-top-left white-on-black">{{plant.discount}}%</span>
      <span class="plant-price">{{plant.currentPrice}}</span>

      {%-else-%}
      <span class="plant-price">{{plant.price}}</span>
      {%-endif-%}

  </article>
  {%-endfor-%}
</div>
```

This is a loop that takes the contents written on `_data/plants.yml` as input and returns the first three plants there as the 'featured plants', creating a card for every one of them and placing them inside the .auto-grid container. 

Later, if it does not have a discount, below the plant name it shows only its price, but if it has a discount then it shows both the previous and current price and the discount in an absolute position relative to the .featured-plant element.

We could also easily add other filters like showing the plants that have some good rating or the ones that were recently received if we had specified that keys on plants.yml.


## Learning #2

I also was faced with the challenge of integrating all the stylesheets because of the time it took for the online website to load them on the first visit. But after some research I found a way to minimize the css files and also get rid of unused css. Now they load in almost no time.


## Future Improvements
- [ ] Implementing of modals that display plant details
- [ ] Search and filter functionality for finding specific plants
- [ ] User authentication
