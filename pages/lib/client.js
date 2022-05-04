import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


const client = sanityClient({
    projectId: 'i75xpj31',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: 'sktOFeraAcl2qTSci2KCc1EfUYvnJ8cQFDVjYURe13LIphqf6TIbDrmohTiJJwcPJ8BHPThcW975oxdH5jzPGf47G6d1NI0thMkuu31QaS3UBVfPQM5gvQI9OpjneSqNbYjC9IMA8lYIXULxQYJq3NpVHnHu8dX29UomJRRzBmXeqdnJz5jj'
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client