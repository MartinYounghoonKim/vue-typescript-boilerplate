function getEnvConstants () {
    const { NODE_ENV } = process.env;
    const S3_BASE_URI = process.env.S3_BASE_URI;
    let API_BASE_URI = '';

    if (NODE_ENV === 'production') {
        API_BASE_URI = process.env.PRODUCTION_API_BASE_URI;
    } else if (NODE_ENV === 'development') {
        API_BASE_URI = process.env.DEVELOPMENT_API_BASE_URI;
    } else {
        API_BASE_URI = process.env.LOCAL_API_BASE_URI;
    }
    return {
        NODE_ENV,
        API_BASE_URI: '',
        S3_BASE_URI,
    }
}
// interface User {
//     name: string;
//     age?: number;
// }
// function printUserInfo(user: User) {
//     console.log(`${user.name}, ${user.age.toString()}`)
//     // => error TS2532: Object is possibly 'undefined'.
//     console.log(`${user.name}, ${user.age!.toString()}`)
//     // => OK, you confirm that you're sure user.age is non-null.
//
//     if (user.age != null) {
//         console.log(`${user.name}, ${user.age.toString()}`)
//     }
//     // => OK, the if-condition checked that user.age is non-null.
//
//     console.log(user.name + ', ' + user.age != null ? user.age.toString() : 'age unknown');
//     // => Unfortunately TypeScript can't infer that age is non-null here.
// }

export const {
    NODE_ENV,
    API_BASE_URI,
    S3_BASE_URI
} = getEnvConstants();
