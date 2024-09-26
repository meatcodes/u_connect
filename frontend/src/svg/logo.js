function Logo() {
    return (
        <svg width="40" height="40" fill="url(#jsc_s_b)" viewBox="0 0 36 36">
            <defs>
                <linearGradient
                    id="jsc_s_b"
                    x1="50%"
                    x2="50%"
                    y1="97.078%"
                    y2="0%"
                >
                    <stop offset="0%" stopColor="#000000"></stop> {/* Change to black */}
                    <stop offset="100%" stopColor="#000000"></stop> {/* Change to black */}
                </linearGradient>
            </defs>
            <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
            <path
                fill="red"
                d="M10 10v8c0 2 1.5 3 3 3s3-1 3-3v-8h2v8c0 3-2 5-5 5s-5-2-5-5v-8h2z"
            ></path>
        </svg>
    );
}

export default Logo;
