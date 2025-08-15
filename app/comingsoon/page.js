import { Box, Typography, Container, IconButton } from "@mui/material"
import { Instagram, Facebook, LinkedIn } from "@mui/icons-material"
import XIcon from "@mui/icons-material/X"
import Image from "next/image"

export default function ComingSoon() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        backgroundImage: "url('/coming-soon-landing.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, rgba(139, 69, 19, 0.7) 0%, rgba(139, 69, 19, 0.4) 50%, rgba(47, 79, 79, 0.7) 100%)",
          zIndex: 1,
        },
      }}
    >
      {/* Decorative dots */}
      <Box
        sx={{
          position: "absolute",
          top: "25%",
          left: "15%",
          width: 24,
          height: 24,
          borderRadius: "50%",
          background: "linear-gradient(45deg, #800080, #ffa500)",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::before": {
            content: '""',
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "linear-gradient(45deg, #800080, #ffa500)",
            opacity: 0.8,
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: 16,
          height: 16,
          borderRadius: "50%",
          backgroundColor: "#ff69b4",
          zIndex: 2,
          boxShadow: "0 0 10px rgba(255, 105, 180, 0.6)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "60%",
          right: "15%",
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "linear-gradient(45deg, #ffa500, #ff69b4)",
          zIndex: 2,
          boxShadow: "0 0 8px rgba(255, 165, 0, 0.6)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "25%",
          left: "10%",
          width: 14,
          height: 14,
          borderRadius: "50%",
          backgroundColor: "#007ebb",
          zIndex: 2,
          boxShadow: "0 0 8px rgba(0, 126, 187, 0.6)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          pl: 0,
          pr: 0,
        }}
      >
        {/* Header with Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            pt: 4,
            pb: 2,
            pl: 2,
            ml: 0,
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              overflow: "hidden",
              mr: 2,
              border: "2px solid #ffffff",
            }}
          >
            <Image
              src="/freelance_logo.png"
              alt="Freelance Logo"
              width={60}
              height={60}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Typography
            variant="h4"
            sx={{
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: "32px",
            }}
          >
            Freelance
          </Typography>
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#ffffff",
              fontSize: { xs: "42px", md: "64px", lg: "75px" },
              fontWeight: "bold",
              lineHeight: 1.1,
              padding: "20px",
              mb: 2,
              maxWidth: "900px",
            }}
          >
            We're launching soon.
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: "#ffffff",
              fontSize: { xs: "18px", md: "24px" },
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              mb: 3,
            }}
          >
            Under Development
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#ffffff",
              fontSize: { xs: "16px", md: "20px" },
              lineHeight: 1.6,
              maxWidth: "600px",
              mb: 2,
            }}
          >
            We're putting the final touches on something special.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#ffffff",
              fontSize: { xs: "16px", md: "20px" },
              lineHeight: 1.6,
              maxWidth: "600px",
              mb: 6,
            }}
          >
            freelancers, rentals, and more at your fingertips.
          </Typography>
        </Box>

        {/* Social Media Section - Bottom of Screen */}
        <Box sx={{ textAlign: "center", pb: 4 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: 400,
              mb: 3,
            }}
          >
            Stay connected with us
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
            }}
          >
            <IconButton
              sx={{
                backgroundColor: "#E4405F",
                color: "#ffffff",
                width: 50,
                height: 50,
                border: "2px solid #ffffff",
                "&:hover": {
                  backgroundColor: "#D63384",
                },
              }}
            >
              <Instagram sx={{ fontSize: 24 }} />
            </IconButton>

            <IconButton
              sx={{
                backgroundColor: "#1877f2",
                color: "#ffffff",
                width: 50,
                height: 50,
                border: "2px solid #ffffff",
                "&:hover": {
                  backgroundColor: "#166fe5",
                },
              }}
            >
              <Facebook sx={{ fontSize: 24 }} />
            </IconButton>

            <IconButton
              sx={{
                backgroundColor: "#000000",
                color: "#ffffff",
                width: 50,
                height: 50,
                border: "2px solid #ffffff",
                "&:hover": {
                  backgroundColor: "#333333",
                },
              }}
            >
              <XIcon sx={{ fontSize: 24 }} />
            </IconButton>

            <IconButton
              sx={{
                backgroundColor: "#0077b5",
                color: "#ffffff",
                width: 50,
                height: 50,
                border: "2px solid #ffffff",
                "&:hover": {
                  backgroundColor: "#006097",
                },
              }}
            >
              <LinkedIn sx={{ fontSize: 24 }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
