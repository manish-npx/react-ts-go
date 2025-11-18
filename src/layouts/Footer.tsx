const Footer = () => {
    return (
        <footer className="bg-background border-t border-border p-8 mt-8 text-center text-muted-foreground">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-semibold text-foreground mb-2">Company</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-foreground mb-2">Support</h3>
                    <ul>
                        <li>FAQ</li>
                        <li>Contact Support</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-foreground mb-2">Connect</h3>
                    <div className="flex justify-center space-x-4 mt-2">
                        {/* Replace with actual social media icons/links */}
                        <span>Facebook</span>
                        <span>Twitter</span>
                        <span>LinkedIn</span>
                    </div>
                </div>
            </div>
            <div className="mt-8 pt-4 border-t border-border text-sm">
                © {new Date().getFullYear()} My Brand. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer