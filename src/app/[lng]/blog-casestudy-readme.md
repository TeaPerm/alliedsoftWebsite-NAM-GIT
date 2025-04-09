
# Contents 

1. [Adding New Markdown Blog Posts and Case Studies](#adding-new-markdown-blog-posts-and-case-studies)
   - [Creating the Folder](#creating-the-folder)
     - [Folder Location](#folder-location)
     - [Creating the Folder](#creating-the-folder)
     - [Folder Contents](#folder-contents)
   - [The page.mdx File](#the-page-mdx-file)
     - [Metadata](#metadata)
     - [Markdown Contents](#markdown-contents)
     - [JavaScript Components](#javascript-components)
       - [Blockquote](#blockquote)
       - [StatList](#statlist)
       - [TagList](#taglist)
       - [TopTip](#toptip)
       - [Image](#image)
     - [Your First Page](#your-first-page)


# Adding New Markdown Blog Posts and Case Studies

In this section, I will explain the process for adding new blog posts and case studies using Markdown. The Markdown files will be available on the website as a page, with the corresponding URL (see later) and be automatically designed and be responsive for all viewers.


## Creating the Folder

To create a new blog post or case study, follow these steps to set up the necessary folder and files.

### 1. Folder Location

The location of the folder is crucial for the source code to locate and parse the Markdown files, enabling the generation of the desired page. For new blog posts, the folder should be placed in **`src/app/[lng]/blog`**. For new case studies, place the folder in **`src/app/[lng]/work`**. Here you can find some examples of the folders and their structure.

### 2. Creating the Folder

Create a new folder in the designated location with an appropriate name. The folder name will become part of the URL for the generated page. For example, if you name the folder `example-blog` within `src/app/[lng]/blog` , the page will be accessible at: `http://(thewebsiteurl)/en/blog/example-blog`.

### 3. Folder Contents

The new folder must include a `page.mdx` file, which will contain the content and metadata for the page. Additionally, the folder can contain optional image files to be used within the page. These images should be referenced appropriately within the `page.mdx` file.

By following these guidelines, you ensure that your new blog posts and case studies are correctly structured and accessible. If successful, the folder structrure should look something like this:

![folder structure example image](https://lh3.googleusercontent.com/pw/AP1GczNPFcvjPE_YgG3NgVdeWJd2ONDdyXRglh0-HQNdMNVY21U44K7mr_xd8WCZDCPoi-e_jUiUxcHruKIfNYW5V_cJSSeXpBvmEqZGP9aXcClRha8v7YWqX-6rrm3b0c26R0f4lv_16YarVEiJ5iWOrwz6=w399-h165-s-no-gm?authuser=0)


## The `page.mdx` File

The `page.mdx` file is essential for generating the page's content and is required. This file combines Markdown with some necessary JavaScript. The JavaScript wraps the metadata and integrates the predesigned components (see later), ensuring a seamless and dynamic user experience.

### Metadata

This file must contain an export of the metadata (blog title, date, author etc.). This is different for blog posts and case studies. For blog posts, here is an example:

```javascript
import  exampleImageCanBeNamedAnything  from  './example-image.jpg'

export const article = {
	date:  '2024-05-15',
	title:  'Your first blog post',
	description:
		'Some description about this post containing information for viewers and encourages a click.',
	author: {
		name:  'The name of the author',
		role:  'The role of the author',
		image: { src:  exampleImageCanBeNamedAnything },
	},
}
```

The `article` object is required. This contains information about this blog post, that will appear on the website, on the actual blog post, and in the blog post suggestion sections throughout the website. The date is the date of the blog article, this will be used in the website for filtering etc. The author image is optional, but if you want to include it, you have to upload the image into the folder, and import it into a new variable with the corresponding path  `import exampleImageCanBeNamedAnything from  './example-image.jpg'` and put it into the author image: `image:  { src: exampleImageCanBeNamedAnything }` . This is how you can import images in javascript  later on as well.

This will look like this (the design may change) in the blog suggestion section:

![blog section example](https://lh3.googleusercontent.com/pw/AP1GczM3FCFFa_6gXUi8J_QtD0sqMy-XXaik9qm-4quO49-RmLn1HPMCy-ONwKyNYmD7cGmfL7bVi6pTM77OPYplfkrTwX_v__WNfrxKF6-SINZqM6rAVzaCclcAAivKhx3_KYFuAShb6eCPVBWhrWkm0k2j=w1217-h745-s-no-gm?authuser=0)



For case studies, the object looks like this:

```javascript
import  logo  from  './logo.svg'
import  imageHero  from  './hero.jpg'

export  const  caseStudy = {
	client:  'Random Client',
	title:  'Case Study Title',
	description:
		'Description of the case study',
	summary: [
		'The first line of the summary.',
		'The second line of the summary.',
		],
	logo,
	image: { src:  imageHero },
	date:  '2023-01-15',
	service:  'Web development, CMS',
	testimonial: {
		author: { name:  'Random Person', role:  'CEO of Random Client' },
		content: 'Something nice the client said about our product.',
	},
}
```

The logic is the same as for blog posts. There is an image and a logo in the object. That refers to the client's logo and hero image of the case study. These can be assigned as a javascript image explained earlier. The case study section looks like this:

![case study section image](https://lh3.googleusercontent.com/pw/AP1GczOt3U8W4L-Jq5Hhzfl3dGmMIv5TkMS77Sy_QXQ0f3snRuwjwlQeOf1sq2dtJnLFwQgsPu-xE2tqN3cRvnzb0IIAxbyo7DEUfgMr2Svd0rXqqPpfFjNfzNLBBP2C42ApApWjK6oq0nxtX91-qqckN5GF=w1298-h892-s-no-gm?authuser=0)

Including a metadata object is optional but highly recommended. Metadata helps browsers parse and index the webpage, enabling search engines like Google to understand the content and purpose of your page better. This can improve your page's visibility and search engine ranking.

```javascript
export  const  metadata = {
	title:  caseStudy.title,
	description:  caseStudy.description,
}
```

### Markdown contents

After including the metadata, the page content can be written. This follows the original Markdown syntax. [ More can be read here.](https://www.markdownguide.org/basic-syntax/)

### Javascript components

In addition to the Markdown content, there are several prewritten JavaScript components available for use in the `page.mdx` file. These components enhance readability and aesthetics, making it easier to create visually appealing and engaging pages. By leveraging these components, you can add interactive elements, and other dynamic features to your content, enhancing the overall user experience. Paste and modify them in your `page.mdx` file. The design may change, but the structure will remain the same.

 #### 1. Blockquote: 

```javascript
<Blockquote
	author={{ name:  'Random Person', role:  'CEO of Random Client 1' }}
	image={{ src:  clientImage }}
>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
	incididunt ut labore et dolore magna aliqua. Odio tempor orci dapibus
	ultrices. Leo integer malesuada nunc vel risus commodo viverra.
</Blockquote>
```
The image should be imported at the top of the file from your blog or case study folder like this: `import clientImage from  './example-client-image.jpg'` and and assigned into the blogquote component:
`image={{ src:  clientImage }}`.


![blockquate example image](https://lh3.googleusercontent.com/pw/AP1GczN0A-Qt11OguzHmFwr0mBD5sJ3IQS12UZ6yb5xjXZfJCM61LKwvx4WrdPmacgZ-RjaHs8FpEN1zb2t2FqkvpkJLe0ZoAizlQS_7UPmZSTxesJReIIn7bafVvJRkxvQOJQu-JA3L-JqMeM7Kv-DwEb3v=w912-h511-s-no-gm?authuser=0)

 #### 2. StatList: 

```javascript
<StatList>
	<StatListItem  value="25%"  label="Stat 1"  />
	<StatListItem  value="10x"  label="Stat 2"  />
	<StatListItem  value="15%"  label="Stat 3"  />
	<StatListItem  value="$1.2M"  label="Stat 4"  />
</StatList>
```

![statlist example](https://lh3.googleusercontent.com/pw/AP1GczNKZNUSLGSoOW8D7N84cwBWuTrcodvSnQOY6dZM5K-TjpePAXXwjHb1HU7MdWqytOU6WS_WW2-MRgT16USxE8uH49ZKqLLiAWDvqmyh8D-SgD9a-MvOa8VQHJkjwFVxNe-XRLbZ_ZNp_CPTXaBh9hkp=w1198-h183-s-no-gm?authuser=0)

 #### 3. TagList: 

```javascript
## What we did
<TagList>
	<TagListItem>Frontend (Next.js)</TagListItem>
	<TagListItem>Custom CMS</TagListItem>
	<TagListItem>SEO</TagListItem>
	<TagListItem>Infrastructure</TagListItem>
</TagList>
```

![taglist example](https://lh3.googleusercontent.com/pw/AP1GczNlxN2DwrDoAzp84dgF7_I6JCYPfSzzGJl2pN_XJDmqCvW1lPNSMbvSeJRyBf086KnjnSEdeIjFUZNqLe7_3MK6MfUDyGcNVwZRW_0AvWRazD8LMUSjtiS5y1pCnTawrNmEEjrUx7UuYfyAcKZckd4S=w815-h153-s-no-gm?authuser=0)

 #### 3. TopTip: 

```javascript
<TopTip>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta nibh. Ligula ullamcorper malesuada proin libero nunc consequat interdum.
</TopTip>
```

![toptip example](https://lh3.googleusercontent.com/pw/AP1GczPtgIdOqj7i5YbqhaIViubhNezp3fNlZeGTM0kkt_cjlySGTABLHDEGp1rpkNz1aMQ7Tdb8IEEII_5ZL6liA-zxuKUFqht7F-fI0qd1Kgj3tIUN3DF6H3KrE_Xl3JYhzntCK8tvnj1EO0PxOgBHRBjc=w804-h168-s-no-gm?authuser=0)
 
  #### 3. Image: 

```javascript
## 2. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet....

Lorem ipsum dolor sit amet....

Lorem ipsum dolor sit amet....

![](./graduation.jpg)
```
The image shall be stored in the folder.

![image example](https://lh3.googleusercontent.com/pw/AP1GczPtk_1BR5L-W9pxk1uEk6Hji7Tihe4CCA_jheFr8-ndnEvyOWO3IBQaE_9slT6xPKLTftNAld779GFBXG-dnom-LOEntd5ugaAiKVQJbWmm1-qoiD15xIrwBErEGHQBQDs82GA9u-VMNouQgMMVt4nF=w657-h808-s-no-gm?authuser=0)
 
 
 #### Your first page

Following the above steps, you can create your first blog post or case study. Here is an example of a full case study `page.mdx` file:

```javascript
import  logo  from  '@/images/clients/placeholder/adidas-8.svg'
import  imageHero  from  './hero.jpg'
import  placeholderPortrait  from  '@/images/clients/placeholder/placeholderPortrait.jpg'

export const caseStudy = {
	client:  'Random Client',
	title:  'Case Study Title',
	description:  'Description of the case study',
	summary: ['The first line of the summary', 'The second line of the summary.'],
	logo,
	image: { src:  imageHero },
	date:  '2023-01-15',
	service:  'Web development, CMS',
	testimonial: {
	author: { name:  'Random Person', role:  'CEO of Random Client' },
	content:  'Something nice the client said about our product.',
	},
}

export const metadata = {
	title:  caseStudy.title,
	description:  caseStudy.description,
}

## Overview

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac feugiat sed lectus vestibulum mattis.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Sit amet justo donec enim diam vulputate ut.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque non tellus orci ac auctor. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Ipsum dolor sit amet consectetur adipiscing.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod _"tempor incididunt"_ ut labore et dolore magna aliqua. In arcu cursus euismod quis viverra.

<TopTip>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Imperdiet nulla malesuada
pellentesque elit eget gravida cum sociis. Etiam dignissim diam quis enim
lobortis scelerisque fermentum dui.
</TopTip>


## What we did

<TagList>
	<TagListItem>Frontend (Next.js)</TagListItem>
	<TagListItem>Custom CMS</TagListItem>
	<TagListItem>SEO</TagListItem>
	<TagListItem>Infrastructure</TagListItem>
</TagList>

<Blockquote
	author={{ name:  'Random Person', role:  'CEO of Random Client 1' }}
	image={{ src:  placeholderPortrait }}
>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
	incididunt ut labore et dolore magna aliqua. Odio tempor orci dapibus
	ultrices. Leo integer malesuada nunc vel risus commodo viverra.
</Blockquote>

<StatList>
	<StatListItem  value="25%"  label="Stat 1"  />
	<StatListItem  value="10x"  label="Stat 2"  />
	<StatListItem  value="15%"  label="Stat 3"  />
	<StatListItem  value="$1.2M"  label="Stat 4"  />
</StatList>
```

And the generated page:

![generated page example](https://lh3.googleusercontent.com/pw/AP1GczMRHviKeHTsg2btHGVMYlBw97TRgiz7vJxKvxRXpG_81lcj1EtDjyGCdpgCNYGPwkvebMdk-mK9NtisN-T_yqPf56LuzoWQgin-3g76gv00mp4LXwWZq9ZxOSg-_WAVMqIpQdgnIKIBckoDEyfS_nID=w324-h911-s-no-gm?authuser=0)

