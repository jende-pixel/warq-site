export async function onRequestPost(context) {
    try {
        return new Response(JSON.stringify({ success: true, message: "Workers köprüsü hazır." }), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
