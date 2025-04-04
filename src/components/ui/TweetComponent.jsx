import { getTweet } from "react-tweet/api";
import { Suspense } from "react";
import { TweetSkeleton, EmbeddedTweet, TweetNotFound } from "react-tweet";
import "@/styles/tweet.css";

const TweetContent = async ({ id, components, onError }) => {
    let error;
    const tweet = id
        ? await getTweet(id).catch((err) => {
              if (onError) {
                  error = onError(err);
              } else {
                  console.error(err);
                  error = err;
              }
          })
        : undefined;

    if (!tweet) {
        const NotFound = components?.TweetNotFound || TweetNotFound;
        return <NotFound error={error} />;
    }

    return <EmbeddedTweet tweet={tweet} components={components} />;
};

export const ReactTweet = (props) => <TweetContent {...props} />;

export async function TweetComponent({ id }) {
    return (
        <div className="tweet my-6">
            <div className={`flex justify-center`}>
                {/* <Suspense fallback={<TweetSkeleton />}> */}
                <ReactTweet id={id} />
                {/* </Suspense> */}
            </div>
        </div>
    );
}
