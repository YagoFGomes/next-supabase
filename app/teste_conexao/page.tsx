import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import FormattedText from "@/components/TextFormatter"

export default async function Index() {
    const supabase = createServerComponentClient({ cookies });

    const { data: posts } = await supabase.from("wordpress_posts").select();
    console.log("aqui")
    return (
    <ul className="my-auto">
        {posts?.map((post) => (
            <li key={post.post_id}>
                {post.title}
                <FormattedText html={post.content} />
                
            </li>
        ))}
    </ul>
    );
}