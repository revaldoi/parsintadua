export default function PlaceContentCenter({children}) {
    return (
        <div children className='bg-black'>
            <div className='bg-violet-900/20 min-h-screen flex items-center justify-center antialiased tracking-tight'>
                <div className='max-w-lg w-full'>
                    {children}
                </div>
            </div>
        </div>
    );
}